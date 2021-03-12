import { isEmail } from '../main';
import { expect } from 'chai';

describe('isEmail', () => {
  it('normal email address', () => {
    expect(isEmail("test@gmail.com")).to.equal(true);
  });
  it('email address with hyphen and underscore', () => {
    expect(isEmail("_test123MYsai-123@233333.club")).to.equal(true);
  });
  it('email address with special characters', () => {
    expect(isEmail("mioaiwetb!!100Apm_=124@gmail.com")).to.equal(true);
  });
  it('not a email address', () => {
    expect(isEmail("o li123@gmail.com")).to.equal(false);
    expect(isEmail("li123@gmail,com")).to.equal(false);
    expect(isEmail("webmaster@1!.com")).to.equal(false);
    expect(isEmail("webmaster@.com")).to.equal(false);
    expect(isEmail("li1mail.com")).to.equal(false);
    expect(isEmail("li123@outlook")).to.equal(false);
  });
});
