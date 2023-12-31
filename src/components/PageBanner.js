import Link from "next/link";

const PageBanner = ({ pageName }) => {
  return (
    <section
      className="page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
      style={{ backgroundImage: "url(assets/images/zcy/page_top.webp)" }}
    >
      <div className="container">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s">{pageName}</h2>
          <h5>十分不完整版，欢迎提供相关资料。</h5>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              {/*<li className="breadcrumb-item">*/}
              {/*  <Link legacyBehavior href="/">*/}
              {/*    Home*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li className="breadcrumb-item active">{pageName}</li>*/}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
