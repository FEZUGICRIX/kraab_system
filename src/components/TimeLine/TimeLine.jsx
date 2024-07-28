import React from 'react';

const TimeLine = ({ step }) => {
  return (
    <div className="timeline">
      <div className="timeline__container">
        <div
          className={`timeline__item ${
            step == 'checkout' ? 'active' : ''
          }`}
        >
          <div className="timeline__img">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.648 14.7504L22.837 12.5637V19.7939C22.837 20.7108 23.5784 21.4515 24.4964 21.4515C25.4144 21.4515 26.1558 20.7108 26.1558 19.7939V12.599L28.3448 14.7856C28.6625 15.1031 29.0862 15.2794 29.5099 15.2794C29.9335 15.2794 30.3572 15.1031 30.675 14.7856C31.3105 14.1508 31.3105 13.0927 30.675 12.4579L25.6615 7.44968C25.0613 6.85011 23.9668 6.85011 23.3313 7.44968L18.3178 12.4579C17.6823 13.0927 17.6823 14.1508 18.3178 14.7856C18.9886 15.4205 20.0125 15.4205 20.648 14.7504Z"
                fill="#323334"
              />
              <path
                d="M38.3368 24.8024C37.8778 24.3087 32.7231 18.8067 32.7231 18.8067C32.0876 18.1366 31.0637 18.1013 30.3929 18.7361C29.7221 19.371 29.6868 20.3938 30.3223 21.0639L33.3233 24.2381H15.6702L18.6713 21.0639C19.3068 20.3938 19.2715 19.371 18.6007 18.7361C17.9298 18.1366 16.906 18.1366 16.2704 18.8067C16.2704 18.8067 11.0451 24.3792 10.6568 24.8024C10.2684 25.1904 9.84473 26.0016 10.0566 26.7422L13.3753 39.0159C13.6225 39.8623 14.3992 40.4619 15.2819 40.4619H33.7117C34.5943 40.4619 35.3711 39.8623 35.6182 39.0159L38.937 26.7422C39.1488 26.0016 38.7958 25.2962 38.3368 24.8024ZM19.8364 35.2421C19.8364 35.8416 19.3421 36.3354 18.7419 36.3354C18.1417 36.3354 17.6474 35.8416 17.6474 35.2421V29.4932C17.6474 28.8936 18.1417 28.3999 18.7419 28.3999C19.3421 28.3999 19.8364 28.8936 19.8364 29.4932V35.2421ZM25.5913 35.2421C25.5913 35.8416 25.097 36.3354 24.4968 36.3354C23.8966 36.3354 23.4023 35.8416 23.4023 35.2421V29.4932C23.4023 28.8936 23.8966 28.3999 24.4968 28.3999C25.097 28.3999 25.5913 28.8936 25.5913 29.4932V35.2421ZM31.3462 35.2421C31.3462 35.8416 30.8519 36.3354 30.2517 36.3354C29.6515 36.3354 29.1572 35.8416 29.1572 35.2421V29.4932C29.1572 28.8936 29.6515 28.3999 30.2517 28.3999C30.8519 28.3999 31.3462 28.8936 31.3462 29.4932V35.2421Z"
                fill="#323334"
              />
            </svg>
          </div>
          <div className="tileline__title">1. Kassa</div>
        </div>

        <div className="timeline_line"></div>

        <div
          className={`timeline__item ${step == 'payment' ? 'active' : ''}`}
        >
          <div className="timeline__img">
            <svg
              width="48"
              height="55"
              viewBox="0 0 48 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5 16.002H13.5C12.6719 16.003 12.0009 16.77 12 17.7165V37.1484C12.0009 38.095 12.6719 38.862 13.5 38.863H35.5C36.3281 38.862 36.9991 38.095 37 37.1484V17.7165C36.9991 16.77 36.3281 16.003 35.5 16.002ZM19.5 21.7172H15.5C15.2239 21.7172 15 21.4613 15 21.1457C15 20.83 15.2239 20.5742 15.5 20.5742H19.5C19.7761 20.5742 20 20.83 20 21.1457C20 21.4613 19.7761 21.7172 19.5 21.7172ZM21.5 20.5742C21.2239 20.5742 21 20.83 21 21.1457C21 21.4613 21.2239 21.7172 21.5 21.7172H25.5C25.7761 21.7172 26 21.4613 26 21.1457C26 20.83 25.7761 20.5742 25.5 20.5742H21.5ZM26.5 34.2908C25.1193 34.2908 24 33.0114 24 31.4332C24 29.8549 25.1193 28.5755 26.5 28.5755C27.8807 28.5755 29 29.8549 29 31.4332C29 33.0114 27.8807 34.2908 26.5 34.2908ZM29.2437 33.8895C29.6235 34.1494 30.0574 34.288 30.5 34.2908C31.8807 34.2908 33 33.0114 33 31.4332C33 29.8549 31.8807 28.5755 30.5 28.5755C30.0574 28.5783 29.6235 28.7168 29.2437 28.9767C30.2522 30.4115 30.2522 32.4548 29.2437 33.8895Z"
                fill="#323334"
              />
              <ellipse
                cx="36"
                cy="17.1454"
                rx="6"
                ry="6.85832"
                fill="#323334"
                stroke="white"
              />
              <path
                d="M34 17.717L36 19.4316L39 14.8594"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="tileline__title">2. Maksu</div>
        </div>

        <div className="timeline_line"></div>

        <div
          className={`timeline__item ${
            step == 'confirmation' ? 'active' : ''
          }`}
        >
          <div className="timeline__img">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0134 11.88V15.0134H9V11.88C9 10.8417 9.84172 10 10.88 10H12.1334C13.1717 10 14.0134 10.8417 14.0134 11.88ZM37.2003 10H18.4001C17.3618 10 16.52 10.8417 16.52 11.88V36.947C16.52 37.9853 17.3618 38.827 18.4001 38.827H37.2003C38.2386 38.827 39.0803 37.9853 39.0803 36.947V11.88C39.0803 10.8417 38.2386 10 37.2003 10ZM25.1099 29.87L22.6032 32.3767C22.3585 32.6213 21.9618 32.6213 21.7171 32.3767L20.4638 31.1233C20.2263 30.8774 20.2297 30.4866 20.4714 30.2448C20.7131 30.0031 21.104 29.9997 21.3499 30.2372L22.1602 31.0475L24.2238 28.9838C24.4697 28.7464 24.8606 28.7498 25.1023 28.9915C25.344 29.2332 25.3474 29.6241 25.1099 29.87ZM22.6032 26.1099L25.1099 23.6032C25.3474 23.3573 25.344 22.9665 25.1023 22.7247C24.8606 22.483 24.4697 22.4796 24.2238 22.7171L22.1602 24.7807L21.3499 23.9705C21.104 23.733 20.7131 23.7364 20.4714 23.9781C20.2297 24.2198 20.2263 24.6107 20.4638 24.8566L21.7171 26.1099C21.9618 26.3546 22.3585 26.3546 22.6032 26.1099ZM25.1099 17.3365L22.6032 19.8432C22.3585 20.0878 21.9618 20.0878 21.7171 19.8432L20.4638 18.5898C20.2263 18.3439 20.2297 17.9531 20.4714 17.7113C20.7131 17.4696 21.104 17.4662 21.3499 17.7037L22.1602 18.514L24.2238 16.4503C24.3812 16.2874 24.6142 16.2221 24.8333 16.2795C25.0524 16.3368 25.2235 16.5079 25.2808 16.727C25.3382 16.9461 25.2729 17.1791 25.1099 17.3365ZM27.1737 31.3069H34.6938C35.0399 31.3069 35.3205 31.0264 35.3205 30.6803C35.3205 30.3342 35.0399 30.0536 34.6938 30.0536H27.1737C26.8276 30.0536 26.547 30.3342 26.547 30.6803C26.547 31.0264 26.8276 31.3069 27.1737 31.3069ZM34.6938 25.0402H27.1737C26.8276 25.0402 26.547 24.7596 26.547 24.4135C26.547 24.0674 26.8276 23.7868 27.1737 23.7868H34.6938C35.0399 23.7868 35.3205 24.0674 35.3205 24.4135C35.3205 24.7596 35.0399 25.0402 34.6938 25.0402ZM27.1737 18.7734H34.6938C35.0399 18.7734 35.3205 18.4929 35.3205 18.1468C35.3205 17.8007 35.0399 17.5201 34.6938 17.5201H27.1737C26.8276 17.5201 26.547 17.8007 26.547 18.1468C26.547 18.4929 26.8276 18.7734 27.1737 18.7734ZM14.0134 16.2667H9V36.947C9 37.9853 9.84172 38.827 10.88 38.827H12.1334C13.1717 38.827 14.0134 37.9853 14.0134 36.947V16.2667Z"
                fill="#323334"
              />
            </svg>
          </div>
          <div className="tileline__title">3. Vahvistus</div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
