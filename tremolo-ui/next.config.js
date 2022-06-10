/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // 現在、ssrおよびdisplayName変換のみが実装されています。これらの2つの変換は、styled-componentsNext.jsで使用するための主な要件
    // 多分以下のやつを対応させたっぽい
    // @see https://code-log.hatenablog.com/entry/2020/01/26/200134
    styledComponents: true,
    removeConsole: true,
  },
};

module.exports = nextConfig;
