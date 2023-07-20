import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | Front starter kit` : undefined}
      defaultTitle="Front starter kit"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
