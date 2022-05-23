import './values.css';
export const Values = () => {
  return (
    <div className="values">
        <div className="value-box shadow">
              <i className='fas fa-home'></i>
              <div className='values-info'>
                  <h3>3,456</h3>
                  <span>New users</span>
              </div>
        </div>
          <div className="value-box shadow">
              <i className='fas fa-home'></i>
              <div className='values-info'>
                  <h3>3,156</h3>
                  <span>Total Orders</span>
              </div>
          </div>
          <div className="value-box shadow">
              <i className='fas fa-home'></i>
              <div className='values-info'>
                  <h3>3,466</h3>
                  <span>Product Sell</span>
              </div>
          </div>
          <div className="value-box shadow">
              <i className='fas fa-home'></i>
              <div className='values-info'>
                  <h3>3,886</h3>
                  <span>This Month</span>
              </div>
          </div>
    </div>
  )
}
