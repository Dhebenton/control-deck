import ChatbotIcon from '../../../../assets/chabot-branded-icons/report.svg'
import PromptSuggestionIcon from '../../../../assets/button-icons/prom-sugg.svg'
import SubmitArrow from '../../../../assets/form-icons/sumitarro.svg'


function ReportGenerator({}) {
    return (
        <div className="content-centred">
            <div className='content-size-retriction'>
                <img src={ChatbotIcon} />
                <p className='h2'>Ask me about your site’s performance.</p>
                <div className='chatbot-form-wrap'>
                    <div className='chatbot-prompt-suggestions-wrap'>
                        <p className='overview-block-heading'>Prompt Suggestions</p>
                        <button className='prompt-suggestion'>
                            <img src={PromptSuggestionIcon} />
                            <p>Summarize the top 3 issues affecting this tab’s performance.</p>
                        </button>
                        <button className='prompt-suggestion'>
                            <img src={PromptSuggestionIcon} />
                            <p>Explain this module’s data like I’m non-technical.</p>
                        </button>
                        <button className='prompt-suggestion'>
                            <img src={PromptSuggestionIcon} />
                            <p>What’s the quickest fix I can apply here for a +10 score gain?</p>
                        </button>
                        <button className='prompt-suggestion'>
                            <img src={PromptSuggestionIcon} />
                            <p>List all critical errors with direct fix instructions.</p>
                        </button>
                    </div>
                    <form className='chatbot-form'>
                        <input className='chatbot-input' placeholder='Ask your question'></input>
                        <button className='button-main icon-square orange chatbot'>
                            <img src={SubmitArrow} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReportGenerator