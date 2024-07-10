import Breadcrumbs from '@Breadcrumbs';

const ContactUsPage = () => {
  return (
    <>
      <Breadcrumbs pageTitle="CONTACTS" />

      <section className="contacts">
        <div className="contacts__info">
          <h1 className="contacts__title">contacts</h1>

          <div className="contacts__info-details">
            <div className="contacts__tel contacts__text">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.6289 7.40221C29.6809 7.20358 29.772 7.01733 29.8968 6.85436C30.0217 6.69139 30.1778 6.55497 30.3561 6.45311C30.5344 6.35125 30.7311 6.28598 30.9349 6.26115C31.1388 6.23631 31.3455 6.25239 31.543 6.30846C34.4557 7.08965 37.1116 8.62346 39.244 10.7559C41.3764 12.8883 42.9102 15.5442 43.6914 18.4569C43.7475 18.6544 43.7636 18.8611 43.7387 19.0649C43.7139 19.2687 43.6486 19.4655 43.5468 19.6438C43.4449 19.822 43.3085 19.9782 43.1455 20.103C42.9825 20.2279 42.7963 20.319 42.5977 20.371C42.4643 20.4096 42.3263 20.4293 42.1875 20.4295C41.8426 20.4276 41.5081 20.3115 41.2361 20.0996C40.9641 19.8876 40.7698 19.5916 40.6836 19.2577C40.0338 16.8793 38.7751 14.7115 37.0317 12.9681C35.2884 11.2247 33.1205 9.96604 30.7422 9.31627C30.5418 9.26644 30.3535 9.1769 30.1883 9.05295C30.0232 8.929 29.8846 8.77316 29.7808 8.59467C29.677 8.41618 29.61 8.21867 29.5839 8.01383C29.5578 7.809 29.5731 7.60102 29.6289 7.40221ZM29.1211 15.3514C30.4431 15.7133 31.6481 16.4133 32.6173 17.3825C33.5865 18.3518 34.2865 19.5567 34.6484 20.8788C34.7316 21.2143 34.925 21.5123 35.1977 21.7248C35.4704 21.9373 35.8066 22.052 36.1523 22.0506C36.2848 22.0519 36.4167 22.0322 36.543 21.9921C36.7434 21.9422 36.9317 21.8527 37.0968 21.7287C37.262 21.6048 37.4006 21.4489 37.5044 21.2704C37.6082 21.092 37.6751 20.8944 37.7012 20.6896C37.7273 20.4848 37.712 20.2768 37.6562 20.078C37.163 18.2216 36.1879 16.5285 34.8296 15.1702C33.4714 13.812 31.7783 12.8369 29.9219 12.3436C29.7181 12.2694 29.501 12.2384 29.2846 12.2526C29.0681 12.2668 28.857 12.326 28.6646 12.4262C28.4723 12.5265 28.3029 12.6658 28.1674 12.8351C28.0318 13.0044 27.9329 13.2001 27.8771 13.4097C27.8213 13.6194 27.8098 13.8383 27.8432 14.0526C27.8767 14.2669 27.9544 14.472 28.0714 14.6546C28.1884 14.8373 28.3422 14.9935 28.5229 15.1135C28.7036 15.2335 28.9073 15.3145 29.1211 15.3514ZM45.2344 34.1991C44.8889 36.8366 43.5973 39.2589 41.5999 41.0156C39.6025 42.7724 37.035 43.744 34.375 43.7499C18.8672 43.7499 6.25 31.1327 6.25 15.6249C6.25586 12.9648 7.22749 10.3974 8.98422 8.39998C10.741 6.40254 13.1633 5.111 15.8008 4.76549C16.4731 4.69094 17.1518 4.8325 17.7382 5.16963C18.3247 5.50677 18.7886 6.02196 19.0625 6.64049L22.9883 15.8006C23.1919 16.2761 23.2736 16.7949 23.2258 17.31C23.1781 17.825 23.0024 18.3199 22.7148 18.7499L19.4727 23.7108C20.9408 26.6903 23.3599 29.0956 26.3477 30.5467L31.25 27.285C31.6795 26.9955 32.1757 26.8203 32.6917 26.7758C33.2077 26.7314 33.7266 26.8193 34.1992 27.0311L43.3594 30.9374C43.9779 31.2113 44.4931 31.6751 44.8302 32.2616C45.1674 32.8481 45.3089 33.5267 45.2344 34.1991ZM42.1289 33.8085L32.9687 29.9022L28.0859 33.1639C27.6367 33.4609 27.1182 33.6368 26.581 33.6744C26.0437 33.7121 25.5058 33.6102 25.0195 33.3788C21.3807 31.6186 18.4374 28.689 16.6602 25.0585C16.4258 24.5738 16.3207 24.0368 16.3549 23.4996C16.3891 22.9624 16.5616 22.4431 16.8555 21.9921L20.1172 17.0311L16.1914 7.87096C14.3065 8.11325 12.5746 9.03426 11.3199 10.4615C10.0652 11.8888 9.37374 13.7245 9.375 15.6249C9.38017 22.2537 12.0158 28.6095 16.703 33.2968C21.3903 37.9841 27.7462 40.6197 34.375 40.6249C36.2754 40.6261 38.111 39.9347 39.5383 38.68C40.9656 37.4252 41.8866 35.6933 42.1289 33.8085Z"
                  fill="#323334"
                />
              </svg>
              <a href="tel:+358452525100">+358 45 2525100</a>
            </div>
            <div className="contacts__address contacts__text">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_302_18064)">
                  <path
                    d="M38.0188 27.9375C36.3813 31.2562 34.1625 34.5625 31.8938 37.5312C29.7416 40.3301 27.4403 43.011 25 45.5625C22.5596 43.0111 20.2584 40.3301 18.1063 37.5312C15.8375 34.5625 13.6188 31.2562 11.9813 27.9375C10.325 24.5844 9.375 21.4438 9.375 18.75C9.375 14.606 11.0212 10.6317 13.9515 7.70146C16.8817 4.7712 20.856 3.125 25 3.125C29.144 3.125 33.1183 4.7712 36.0485 7.70146C38.9788 10.6317 40.625 14.606 40.625 18.75C40.625 21.4438 39.6719 24.5844 38.0188 27.9375ZM25 50C25 50 43.75 32.2313 43.75 18.75C43.75 13.7772 41.7746 9.00805 38.2583 5.49175C34.7419 1.97544 29.9728 0 25 0C20.0272 0 15.2581 1.97544 11.7417 5.49175C8.22544 9.00805 6.25 13.7772 6.25 18.75C6.25 32.2313 25 50 25 50Z"
                    fill="#323334"
                  />
                  <path
                    d="M25 25C23.3424 25 21.7527 24.3415 20.5806 23.1694C19.4085 21.9973 18.75 20.4076 18.75 18.75C18.75 17.0924 19.4085 15.5027 20.5806 14.3306C21.7527 13.1585 23.3424 12.5 25 12.5C26.6576 12.5 28.2473 13.1585 29.4194 14.3306C30.5915 15.5027 31.25 17.0924 31.25 18.75C31.25 20.4076 30.5915 21.9973 29.4194 23.1694C28.2473 24.3415 26.6576 25 25 25ZM25 28.125C27.4864 28.125 29.871 27.1373 31.6291 25.3791C33.3873 23.621 34.375 21.2364 34.375 18.75C34.375 16.2636 33.3873 13.879 31.6291 12.1209C29.871 10.3627 27.4864 9.375 25 9.375C22.5136 9.375 20.129 10.3627 18.3709 12.1209C16.6127 13.879 15.625 16.2636 15.625 18.75C15.625 21.2364 16.6127 23.621 18.3709 25.3791C20.129 27.1373 22.5136 28.125 25 28.125Z"
                    fill="#323334"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_302_18064">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Veteraanintie 2, 06100 Porvoo, Finland</span>
            </div>
          </div>
        </div>

        <div className="contacts__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.8033059030954!2d25.6399172!3d60.3871841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4691f67ec00a92bf%3A0x1352a304f5f62671!2sVeteraanintie%202%2C%2006100%20Porvoo%2C%20Finland!5e0!3m2!1sen!2sus!4v1687876876076!5m2!1sen!2sus"
            width="608"
            height="428"
            style={{ border: 0, borderRadius: 30 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
