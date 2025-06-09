import PerformanceIcon from '../../../../assets/overview-icons/atri/performance.svg'
import ConversionIcon from '../../../../assets/overview-icons/atri/conversion.svg'
import SEOIcon from '../../../../assets/overview-icons/atri/seodia.svg'
import BlogWriterIcon from '../../../../assets/overview-icons/atri/blogw.svg'
import MetaTitleIcon from '../../../../assets/overview-icons/atri/metatitle.svg'
import ReportGeneratorIcon from '../../../../assets/overview-icons/atri/report.svg'
import SettingsIcon from '../../../../assets/overview-icons/atri/settings.svg'

function AtriOverview({}) {
    return (
        <div className="overview-wrap">
            <div className="overview-block">
                <p className="overview-block-heading">Categories</p>
                <div className="overview-grid">
                    <button className="overview-tab">
                        <img src={PerformanceIcon} />
                        <p className='overview-heading'>Performance Overview</p>
                        <p className='overview-subheading'>Track user behaviour, surface engagement trends, and spot drop offs to improve site performance automatically.</p>
                    </button>
                    <button className="overview-tab">
                        <img src={ConversionIcon} />
                        <p className='overview-heading'>Conversion Optimization</p>
                        <p className='overview-subheading'>Identify funnel friction, apply targeted changes, and boost conversion rates with AI-backed suggestions.</p>
                    </button>
                    <button className="overview-tab">
                        <img src={SEOIcon} />
                        <p className='overview-heading'>SEO Diagnostics</p>
                        <p className='overview-subheading'>Scan for SEO issues, crawl errors, and structure gaps then auto-generate prioritized fix recommendations.</p>
                    </button>
                </div>
            </div>
            <div className='overview-block'>
                <p className='overview-block-heading'>Content Writer</p>
                <div className='overview-grid'>
                    <button className="overview-tab">
                        <img src={BlogWriterIcon} />
                        <p className='overview-heading'>Blog Writer</p>
                        <p className='overview-subheading'>Generate structured, search-optimized blog posts with internal links, keyword focus, and clean formatting.</p>
                    </button>
                    <button className="overview-tab">
                        <img src={MetaTitleIcon} />
                        <p className='overview-heading'>Meta Title & Desciptions</p>
                        <p className='overview-subheading'>Auto-generate metadata tailored for ranking and CTR—short, sharp, and always on-brand.</p>
                    </button>
                    <button className="overview-tab">
                        <img src={ReportGeneratorIcon} />
                        <p className='overview-heading'>Report Generator</p>
                        <p className='overview-subheading'>Produce detailed reports across all modules with charts, insights, and export-ready formats.</p>
                    </button>
                </div>
            </div>
            <div className='overview-block'>
                <p className='overview-block-heading'>Settigns</p>
                <div className='overview-grid'>
                    <button className="overview-tab">
                        <img src={SettingsIcon} />
                        <p className='overview-heading'>AI Settings</p>
                        <p className='overview-subheading'>Use Custom Fields to tag incidents with structured data, for example the Impacted Product or Affected Team.</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AtriOverview