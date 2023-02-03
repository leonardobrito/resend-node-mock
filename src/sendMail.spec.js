
const { sendEmail } = require("./sendEmail");
const { Resend } = require('resend');

describe('Resend sendEmail', () => {
  let spySendEmail
  beforeEach(() => {
    spySendEmail = jest.spyOn(Resend.prototype, 'sendEmail').mockImplementation(() => { });
    sendEmail()
  })

  it('it should call sendEmail from resend', () => {
    expect(spySendEmail).toHaveBeenCalledTimes(1);
    expect(spySendEmail).toHaveBeenCalledWith({
      "from": "you@example.com",
      "subject": "hello world",
      "text": "it works!",
      "to": "user@gmail.com",
    })
  })
})
