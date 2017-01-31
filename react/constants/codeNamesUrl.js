let codeNamesUrl;

switch (process.env.NODE_ENV) {
  // case 'production':
  //   codeNamesUrl = 'production url'
  //   break;
  // case 'staging':
  //   codeNamesUrl = 'staging url'
  //   break;
  default:
    codeNamesUrl = 'http://localhost:3000'
}

export default codeNamesUrl;
