class MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.save

    Pusher.trigger('messages', 'new_message', {
      'text': @message.text,
      'username': @message.username
    })
    respond_to do |format|
      format.json { render json: { success: true }.to_json }
    end
  end

  private

  def message_params
    params.require(:message).permit(:username, :text)
  end
end
