import './styles/email-content.css'

import backArrow from './assets/icons/back-arrow.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import rateStarButton from './assets/icons/rate-star-button.png'

function EmailTitle(){
    return (
        <div className="title">
            <h1>Welcome to Flaticon</h1>
        </div>
    )
}

function SenderInfo() {
    return (
        <div className="sender-info">
            <h2>Freepik Company</h2>
            <em>&lt;no-reply@freepik.com&gt;</em>
        </div>
    )
}

function UserInfo() {
    return (
        <div className="user-info">
            <p>
            to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
            </p>
        </div>
    )
}

function EmailInfo() {
    return (
        <div className="email-info">
            <SenderInfo />
            <UserInfo />
        </div>
    )
}

function EmailContentHeaderDateInfo(){
    return (
        <div className="date-info">
            <p>17 March 2021, 09:33</p>
        </div>
    )
}

function EmailContentHeaderActions(){
    return (
        <div className="email-action-icons">
            <ul>
            <li>
                <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
                <img
                className="icon"
                src={rateStarButton}
                alt="star button"
                />
            </li>
            <li>
                <img
                className="icon"
                src={rubbishButton}
                alt="delete button"
                />
            </li>
            </ul>
        </div>
    )
}

function EmailContentHeader(){
    return (
        <header className="email-content--header">
            <div className="avatar"></div>
            <EmailInfo />
            <EmailContentHeaderDateInfo />
            <EmailContentHeaderActions />
        </header>
    )
}

function EmailBody() {
    return (
        <section className="email-body">
            <div className="content">
            <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
        </section>
    )
}

function EmailActions(){
    return (
        <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
        </section>
    )
}

function EmailContent() {
    return (
        <article className="email-content">
            <EmailTitle />
            <EmailContentHeader />
            <EmailBody />
            <EmailActions />
        </article>
    )
}

export default EmailContent