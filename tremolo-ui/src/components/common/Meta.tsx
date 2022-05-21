import Head from 'next/head';
import { AppMetaConfig } from '@/config';

interface MetaProps {
  title?: string;
  description?: string;
  ogPagePath?: string;
  noIndex?: boolean;
}

/**
 * @see https://kaikoku.blam.co.jp/client/digimaguild/knowledge/sns-pr/498
 */
export const Meta = ({ title, description, ogPagePath, noIndex }: MetaProps) => {
  const metaConfig = new AppMetaConfig();
  const metaTitle = title ?? metaConfig.getTitle;
  const metaDescription = description ?? metaConfig.getDesc;
  // og:urlは絶対パスで指定しないといけない　。
  const ogURL = ogPagePath ? `${metaConfig.getOgURL}${ogPagePath}` : metaConfig.getOgURL;
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={metaDescription} />
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={ogURL} />
      <meta property='og:site_name' content={metaConfig.getOgSiteName} />
      <meta property='og:image' content={metaConfig.getOgImage} />
      <meta property='og:locale' content='ja_JP' />
      <meta property='fb:app_id' content='' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@' />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:url' content={ogURL} />
      <meta name='twitter:image' content={metaConfig.getOgImage} />
      <meta name='viewport' content='width=device-width' />
      <meta name='format-detection' content='telephone=no' />
      {/* noIndex === true の場合のみ noindex 有効化 */}
      {noIndex && <meta name='robots' content='noindex' />}
      <link rel='shortcut icon' href='/favicon.ico' />
    </Head>
  );
};
