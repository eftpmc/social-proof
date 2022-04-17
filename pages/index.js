import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Proof</title>
        <meta name="description" content="Social Proof" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div id='grid'>
          <div id="text">
            <h1 id="title">10,000+ of our users love our products.</h1>
            <p id="para">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
          </div>
          <div id="reviews">
            <div id="left" className='review'>
              <div className='stars'>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              </div>
              <h4>Rated 5 Stars in Reviews</h4>
            </div>
            <div className='review'>
              <div className='stars'>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              </div>
              <h4>Rated 5 Stars in Report Guru</h4>
            </div>
            <div id="right" className='review'>
              <div className='stars'>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              <img src="/icon-star.svg"></img>
              </div>
              <h4>Rated 5 Stars in BestTech</h4>
            </div>
          </div>
          <div id="comments">
            <div className='boxpads'>
            <div id="colton" className='comment'>
              <div className='user'>
                <img className="pic" src="image-colton.jpg"></img>
                <h3 className='name'>Colton Smith<div className='role'>Verified Buyer</div></h3>
              </div>
              <p className='reply'>
              &quot;We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!&quot;
                </p>
            </div>
            </div>
            <div className='boxpads'>
            <div id="irene" className='comment'>
              <div className='user'>
                <img className="pic" src="image-irene.jpg"></img>
                <h3 className='name'>Irene Roberts<div className='role'>Verified Buyer</div></h3>
              </div>
              <p className='reply'>
                  &quot;Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.&quot;
                </p>
            </div>
            </div>
            <div className='boxpads'>
            <div id="anne" className='comment'>
              <div className='user'>
                <img className="pic" src="image-anne.jpg"></img>
                <h3 className='name'>Anne Wallace<div className='role'>Verified Buyer</div></h3>
              </div>
              <p className='reply'>
              &quot;Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!&quot;
                </p>
            </div>
            </div>
          </div>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
