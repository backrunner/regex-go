import { expect } from 'chai';
import { containsEmoji, containsChinese } from "../main";
import regexGo from '../main';

describe('containsEmoji', () => {
  it('normal string', () => {
    expect(containsEmoji('11222aabbcc')).to.equal(false);
  });
  it('string with chinese', () => {
    expect(containsEmoji('今天天气真好！')).to.equal(false);
  });
  it('string with not emoji heart', () => {
    expect(containsEmoji('❤')).to.equal(false);
  });
  it('string with emoji', () => {
    expect(containsEmoji('abcabc🧡123456')).to.equal(true);
  });
  it('using without named import', () => {
    expect(regexGo.containsEmoji('123456ttt🐕233')).to.equal(true);
  });
});

describe('containsChinese', () => {
  it('english string', () => {
    expect(containsChinese('This is a sentence in English.')).to.equal(false);
  });
  it('japanese string', () => {
    expect(containsChinese('おはようございます')).to.equal(false);
  });
  it('chinese string', () => {
    expect(containsChinese('aaabbbcccc你好ddddd')).to.equal(true);
  });
  it('chinese symobl', () => {
    expect(containsChinese('aaabb，。、aas123')).to.equal(false);
  });
  it('using without named import', () => {
    expect(regexGo.containsChinese('今天天气不错！')).to.equal(true);
  });
});
