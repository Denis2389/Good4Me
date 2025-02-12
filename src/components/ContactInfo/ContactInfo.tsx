import styles from './ContactInfo.module.scss'

const ContactInfo = () => {
    return (
        <section className={styles.contactInfoContainer}>
            <div className={styles.firstBlock}>
                <h3>Contact Us – We’d Love to Hear from You! 📩</h3>
                <p>At Multi Vitamins Core, we value every connection! Whether you have a question about our vitamins & supplements, need assistance with an order, or are interested in a business partnership – we’re here to help. Your health and satisfaction are our top priorities!</p>
            </div>
            <div className={styles.secondBlock}>
                <h3>📞 How to Reach Us</h3>
                <h5>We make it easy for you to get in touch:</h5>
                <ul>
                    <li>📧 Email: bereznyakdenis2003@gmail.com – Drop us a message, and our team will get back to you as soon as possible.</li>
                    <li>📍 Office Location: Kiyv, Antonovucha 176  – Come visit us for expert guidance and product recommendations.</li>
                    <li>📱 Social Media: Stay updated with the latest news, promotions, and health tips! Connect with us on Instagram: deniska2389</li>
                    <li> Phone: 0972922174 – Prefer to talk? Give us a call!</li>
                </ul>
            </div>
            <div className={styles.thirdBlock}>
                <h3>💬 How Can We Help You?</h3>
                <ul>
                    <li>✔️ Product Questions? Need help choosing the right vitamins? Our team is happy to assist!</li>
                    <li>✔️ Wholesale & Business Inquiries? Interested in selling our products? Let’s discuss partnership opportunities.</li>
                    <li>✔️ Order Support? Need help tracking your order or processing a return? We’re here for you.</li>
                    <li>✔️ Collaboration Requests? If you’re an influencer, health expert, or business looking to collaborate, let’s chat!</li>
                    <p className={styles.lastBlock}>✨ Your health and wellness journey matters to us. Don’t hesitate to reach out – we’re always here for you! ✨</p>
                </ul>
            </div>
        </section>
    )
}

export default ContactInfo