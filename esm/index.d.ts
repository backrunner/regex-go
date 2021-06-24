declare const domainTester: RegExp;
declare const isDomain: (str: string) => boolean;

declare const emailTester: RegExp;
declare const isEmail: (str: string) => boolean;

declare const emojiRGIRegex: RegExp;

declare const chineseTester: RegExp;
declare const containsEmoji: (str: string) => boolean;
declare const containsChinese: (str: string) => boolean;

declare const ipv4Tester: RegExp;
declare const ipv4LooseTester: RegExp;
declare const ipv6Tester: RegExp;
declare const ipv6LooseTester: RegExp;
declare const isIPAddress: (str: string) => boolean;
declare const isIPv4: (str: string) => boolean;
declare const isIPv6: (str: string) => boolean;

declare const regexGo_domainTester: typeof domainTester;
declare const regexGo_isDomain: typeof isDomain;
declare const regexGo_emailTester: typeof emailTester;
declare const regexGo_isEmail: typeof isEmail;
declare const regexGo_chineseTester: typeof chineseTester;
declare const regexGo_containsEmoji: typeof containsEmoji;
declare const regexGo_containsChinese: typeof containsChinese;
declare const regexGo_ipv4Tester: typeof ipv4Tester;
declare const regexGo_ipv6Tester: typeof ipv6Tester;
declare const regexGo_ipv4LooseTester: typeof ipv4LooseTester;
declare const regexGo_ipv6LooseTester: typeof ipv6LooseTester;
declare const regexGo_isIPAddress: typeof isIPAddress;
declare const regexGo_isIPv4: typeof isIPv4;
declare const regexGo_isIPv6: typeof isIPv6;
declare namespace regexGo {
  export {
    regexGo_domainTester as domainTester,
    regexGo_isDomain as isDomain,
    regexGo_emailTester as emailTester,
    regexGo_isEmail as isEmail,
    emojiRGIRegex as emojiTester,
    regexGo_chineseTester as chineseTester,
    regexGo_containsEmoji as containsEmoji,
    regexGo_containsChinese as containsChinese,
    regexGo_ipv4Tester as ipv4Tester,
    regexGo_ipv6Tester as ipv6Tester,
    regexGo_ipv4LooseTester as ipv4LooseTester,
    regexGo_ipv6LooseTester as ipv6LooseTester,
    regexGo_isIPAddress as isIPAddress,
    regexGo_isIPv4 as isIPv4,
    regexGo_isIPv6 as isIPv6,
  };
}

export default regexGo;
export { chineseTester, containsChinese, containsEmoji, domainTester, emailTester, emojiRGIRegex as emojiTester, ipv4LooseTester, ipv4Tester, ipv6LooseTester, ipv6Tester, isDomain, isEmail, isIPAddress, isIPv4, isIPv6 };
