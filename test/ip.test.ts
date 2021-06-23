import { expect } from 'chai';
import { isIPAddress, isIPv4, isIPv6, ipv4Tester, ipv6Tester } from '../main';
import regexGo from '../main';

describe('isIPAddress', () => {
  it('is ip address', () => {
    expect(isIPAddress('1.1.1.1')).to.equal(true);
    expect(isIPAddress('255.255.255.255')).to.equal(true);
    expect(isIPAddress('0.0.0.0')).to.equal(true);
    expect(isIPAddress('233.5.1.2')).to.equal(true);
    expect(isIPv4('1.1.1.1')).to.equal(true);
    expect(isIPv4('255.255.255.255')).to.equal(true);
    expect(isIPv4('0.0.0.0')).to.equal(true);
    expect(isIPv6('2002::')).to.equal(true);
    expect(isIPv6('2001:4860:4860::8844')).to.equal(true);
    expect(isIPv6('2400:3200::1')).to.equal(true);
    expect(isIPv6('240C::6666')).to.equal(true);
  });
  it('is not ip address', () => {
    expect(isIPAddress('258.2.1.2')).to.equal(false);
    expect(isIPAddress('1.2.3')).to.equal(false);
    expect(isIPAddress('1.1')).to.equal(false);
    expect(isIPAddress('188,222.111.123')).to.equal(false);
    expect(isIPv4('1.2.3')).to.equal(false);
    expect(isIPv4('1.1')).to.equal(false);
    expect(isIPv4('188,222.111.123')).to.equal(false);
    expect(isIPv4('3FFE:FFFF:7654:FEDA:1245:BA98:3210:4562')).to.equal(false);
    expect(isIPv6('127.0.0.1')).to.equal(false);
    expect(isIPv6('10002::1002')).to.equal(false);
    expect(isIPv6('2400-3200::1')).to.equal(false);
    expect(isIPv6('9999:6666')).to.equal(false);
  })
  it('using without named import', () => {
    expect(regexGo.isIPAddress('127.0.0.1')).to.equal(true);
    expect(regexGo.isIPv4('127.0.0.1')).to.equal(true);
    expect(regexGo.isIPv6('240C::6666')).to.equal(true);
  });
  it('using regex', () => {
    expect(ipv4Tester.test('223.5.5.5')).to.equal(true);
    expect(ipv6Tester.test('2001:4860:4860::8844')).to.equal(true);
  });
});
