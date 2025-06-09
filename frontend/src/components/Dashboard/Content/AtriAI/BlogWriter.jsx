import ToolTip from "../../components/ToolTIp"
import PromptSuggestionIcon from '../../../../assets/button-icons/prom-sugg.svg'
import { useState } from "react"


function BlogWriter({}) {
    const answerBT = 'Explain this module’s data like I’m non-technical.'
    const [ step, setStep ] = useState(1)

    function nextStep(e) {
        e.preventDefault();
        setStep((prev) => prev + 1);
    }

    return (
         <div className="content-centred">
            <div className='content-size-retriction'>
                <div className="proccess-wrap">
                    <div className="process-stage active">
                        <div className="process-dot"></div>
                        <div className="process-dot middle"></div>
                        <div className="process-dot"></div>
                        <p className="process-text">Blog Details</p>
                    </div>
                    <div className="process-line-wrap">
                        <div className="process-line"></div>
                    </div>
                    <div className="process-stage">
                        <div className="process-dot"></div>
                        <div className="process-dot middle"></div>
                        <div className="process-dot"></div>
                        <p className="process-text">Tone & Keywords</p>
                    </div>
                    <div className="process-line-wrap">
                        <div className="process-line"></div>
                    </div>
                    <div className="process-stage">
                        <div className="process-dot"></div>
                        <div className="process-dot middle"></div>
                        <div className="process-dot"></div>
                        <p className="process-text">Pick Your Blog</p>
                    </div>
                    <div className="process-line-wrap">
                        <div className="process-line"></div>
                    </div>
                    <div className="process-stage">
                        <div className="process-dot"></div>
                        <div className="process-dot middle"></div>
                        <div className="process-dot"></div>
                        <p className="process-text">Result</p>
                    </div>
                </div>
                <p className="h2">Define The Focus</p>
                
                
                { step === 1 &&
                    <form className="content-generator-form">
                        <div className="content-form-block">
                            <div className="tool-tip-label-wrap">
                                <label className="content-generation-lebel">Blog Topic</label>
                                <ToolTip answer={answerBT}/>
                            </div>
                            <input className="generator-input" placeholder="e.g. Benefits of SEO for Small Businesses"></input>
                        </div>
                        <div className="content-form-block">
                            <div className="tool-tip-label-wrap">
                                <label className="content-generation-lebel">Target Keyword</label>
                                <ToolTip answer={answerBT}/>
                            </div>
                            <input className="generator-input" placeholder="e.g. SEO for small business"></input>
                        </div>
                        <div className="content-form-block">
                            <div className="tool-tip-label-wrap">
                                <label className="content-generation-lebel">Search Intent</label>
                                <ToolTip answer={answerBT}/>
                            </div>
                            <input className="generator-input" placeholder="e.g. Local business owners, eCommerce founders"></input>
                        </div>
                        <div className="content-form-block">
                            <div className="tool-tip-label-wrap">
                                <label className="content-generation-lebel">Audience</label>
                                <ToolTip answer={answerBT}/>
                            </div>
                            <input className="generator-input" placeholder="Informational, Commercial, Navigational, Transactional"></input>
                        </div>
                        <div className="form-button-wrap">
                            <button className="button-main">
                                <img src={PromptSuggestionIcon} />
                                <p>Auto Generate</p>
                            </button>
                            <button className="button-main orange" onClick={nextStep}>
                                <p>Next Step</p>
                            </button>
                        </div>
                    </form>
                }
                { step === 2 &&
                    <form className="content-generator-form">
                        <div className="content-form-block">
                            <div className="tool-tip-label-wrap">
                                <label className="content-generation-lebel">Brand Name</label>
                                <ToolTip answer={answerBT}/>
                            </div>
                            <input className="generator-input" placeholder="e.g. Benefits of SEO for Small Businesses"></input>
                        </div>
                        <div className="content-form-block">
                            <div className="tool-tip-label-wrap">
                                <label className="content-generation-lebel">Service Location</label>
                                <ToolTip answer={answerBT}/>
                            </div>
                            <input className="generator-input" placeholder="e.g. SEO for small business"></input>
                        </div>
                        <div className="content-form-block">
                            <div className="tool-tip-label-wrap">
                                <label className="content-generation-lebel">Preferred Tone</label>
                                <ToolTip answer={answerBT}/>
                            </div>
                            <input className="generator-input" placeholder="e.g. Local business owners, eCommerce founders"></input>
                        </div>
                        <div className="content-form-block">
                            <div className="tool-tip-label-wrap">
                                <label className="content-generation-lebel">Call to Action</label>
                                <ToolTip answer={answerBT}/>
                            </div>
                            <input className="generator-input" placeholder="Informational, Commercial, Navigational, Transactional"></input>
                        </div>
                        <div className="content-form-block span">
                            <div className="tool-tip-label-wrap">
                                <label className="content-generation-lebel">Business Description</label>
                                <ToolTip answer={answerBT}/>
                            </div>
                            <input className="generator-input" placeholder="Informational, Commercial, Navigational, Transactional"></input>
                        </div>
                        <div className="form-button-wrap">
                            <button className="button-main">
                                <img src={PromptSuggestionIcon} />
                                <p>Auto Generate</p>
                            </button>
                            <button className="button-main orange" onClick={nextStep}>
                                <p>Next Step</p>
                            </button>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}

export default BlogWriter