import Order from '../Order/Order'

const History = () => {
  return (
    <>
      <div className="history">
        <div className="history__container">
          <h4 className="history__title account-title">Order history</h4>

          <div className="history__content">
            <Order number={1} price={230} payment='Apple Pay' delivered={true} />
            <Order number={2} price={250} payment='Apple Pay' delivered={false} />
            <Order number={3} price={300} payment='Apple Pay' delivered={false} />
          </div>
        </div>
      </div>
    </>
  )
}

export default History