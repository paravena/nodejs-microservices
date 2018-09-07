const mockMails = [
  {
      subject: 'My first Email',
      receiver: 'test@test.com',
      content: 'Hello World'
  },
  {
      subject: 'My second Email',
      receiver: 'test@test.com',
      content: 'Hello World'
  },
  {
      subject: 'My third Email',
      receiver: 'test@test.com',
      content: 'Hello World'
  }
];

module.exports = {
  Query: {
    mails: () => mockMails,
    mail: (_, args) => {
      console.log(args)
      return mockMails[0];
    }
  },
  Mutation: {
    mail: (_, args) => {
      mockMails[0] = args;
      return args;
    }
  }
};
