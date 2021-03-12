import * as DomainTester from './src/domain';
import * as EmailTester from './src/email';

const regexGo = {
  ...DomainTester,
  ...EmailTester,
};

export const isDomain = DomainTester.isDomain;
export const isEmail = EmailTester.isEmail;

console.log(regexGo);

export default regexGo;
