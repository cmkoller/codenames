import Root from 'components/Root';
import configureStore from 'store/configureStore';

describe('features/userEntersUsername', () => {
  let history, store, wrapper, rootDiv, fakeRedirectWindow;

  beforeEach(() => {
    // spyOn(global, 'fetch').and.callFake(url => {
    //   let response, responseBody;
    //   if (url.endsWith('/api/v2/product_offerings')) {
    //     return createResponseFromFixture('cohortsIndex');
    //   } else if (url.endsWith('/api/v2/interview_time_slots?product=on-campus')) {
    //     return createResponseFromFixture('interviewWeeksIndexOnsite');
    //   } else if (url.endsWith('/api/v2/on_campus_leads')) {
    //     return createResponseFromFixture('studentApplicationCreate');
    //   }
    // });

    store = configureStore();
    history = syncHistoryWithStore(browserHistory, store);

    store.dispatch(push('/play'));
    wrapper = mount(
      <Root store={store} history={history} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
    store.dispatch(push('/'));
  });

  describe("asasdasd", () => {
    it('should allow the user to submit their name', () => {
      console.log("getting to the first expect");
      // console.log(wrapper)
      console.log(wrapper.text())
      expect(wrapper.text()).toMatch("Welcome to Codenames!");
      expect(wrapper.text()).toMatch("Please enter your username to get started");

      // let usernameField = wrapper.findWhere(n => {
      //   return n.type() === 'input' && n.props().id === 'username';
      // });
      // let submitButton = wrapper.findWhere(n => {
      //   return n.type() === 'button' && n.text() === 'Go!';
      // });
      //
      // wrapper.simulate(emailField, 'change', { target: { value: 'chrispoona' } });
      // wrapper.simulate(submitButton, 'submit');
      //

    })
  })

});
