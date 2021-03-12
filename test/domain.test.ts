import { isDomain } from '../main';
import regexGo from '../main';
import { expect } from 'chai';

describe('isDomain', () => {
  it('normal domain', () => {
    expect(isDomain('google.com')).to.equal(true);
    expect(isDomain('www.google.com')).to.equal(true);
  });
  it('long domain', () => {
    expect(isDomain('123123.123123.123123.123123.123123.google.com')).to.equal(true);
    expect(isDomain('_api.zone.us.a.b.c.google.com')).to.equal(true);
  });
  it('complicated domain', () => {
    expect(isDomain('external.asd1230-123.asd_internal.asd.gm-_ail.com')).to.equal(true);
  });
  it('domain with hyphen', () => {
    expect(isDomain('common-test.abc.com')).to.equal(true);
    expect(isDomain('test.abc-abc.com')).to.equal(true);
    expect(isDomain('test-1.abc-abc.com')).to.equal(true);
    expect(isDomain('test-1.-abcabc.com')).to.equal(false);
  });
  it('domain with underscore', () => {
    expect(isDomain('common_test.abc.com')).to.equal(true);
    expect(isDomain('test_1.abc_abc.com')).to.equal(true);
    expect(isDomain('test._abcabc.com')).to.equal(false);
    expect(isDomain('_google.com')).to.equal(false);
  });
  it('chinese domain', () => {
    expect(isDomain('你好.哈哈.我爱你')).to.equal(true);
    expect(isDomain('我爱你.中国')).to.equal(true);
    expect(isDomain('www.百度.中国')).to.equal(true);
  });
  it('not a domain', () => {
    expect(isDomain('.wtf')).to.equal(false);
    expect(isDomain('abcdefg')).to.equal(false);
    expect(isDomain('http://google.com')).to.equal(false);
    expect(isDomain('google .com')).to.equal(false);
    expect(isDomain('google.g')).to.equal(false);
  });
  it('using without named import', () => {
    expect(regexGo.isDomain('google.com')).to.equal(true);
  });
});
