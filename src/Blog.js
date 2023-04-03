import "./styles.css";
export function Blog({data}) {
  const { firstParagraph, secondParagraph, thirdParagraph,
      fourthParagraph, referencesTitle, references, disclaimerTitle, disclaimer }  =data;
  return <div className='contentWrapper'>
      <div className='firstParagraph'>
          <p className='contentTitle'>{firstParagraph.title1}</p>
          <p className='content'>{firstParagraph.content1}</p>
          <p className='content'>{firstParagraph.content2}</p>
          <p className='content'>{firstParagraph.content3}</p>
          <p className='content'>{firstParagraph.content4}</p>
          <p className='content'>{firstParagraph.content5}</p>
          <p className='content'>{firstParagraph.content6}</p>
          <p className='content'>{firstParagraph.content7}</p>
          <p className='content'>{firstParagraph.content8}</p>
          <p className='content'>{firstParagraph.content9}</p>
          <p className='content'>{firstParagraph.content10}</p>
          <div className='content10'>
             {firstParagraph.content10Item.map((item, index) => {
                 return <span className='content10Item' key={item}>{index + 1}.<span className='content10ItemInfo'>{item}</span></span>
             })}
          </div>
      </div>
      <div className='secondParagraph'>
          <p className='contentTitle'>{secondParagraph.title1}</p>
          <p className="subTitle">{secondParagraph.subTitle1}</p>
          <p className="content">{secondParagraph.content1}</p>
          <p className="content">{secondParagraph.content2}</p>
          <p className="subTitle">{secondParagraph.subTitle3}</p>
          <p className="content">{secondParagraph.content3_1}</p>
          <p className="content">{secondParagraph.content3_2}</p>
          <p className="subTitle">{secondParagraph.subTitle4}</p>
          <p className="content">{secondParagraph.content4_1}</p>
          <p className="content">{secondParagraph.content4_2}</p>
          <p className="subTitle">{secondParagraph.subTitle5}</p>
          <p className="content">{secondParagraph.content5_1}</p>
          <p className="content">{secondParagraph.content5_2}</p>
      </div>

      <div className='thirdParagraph'>
          <p className='contentTitle'>{thirdParagraph.title1}</p>
          <p className="subTitle">{thirdParagraph.subTitle1}</p>
          <p className="content">{thirdParagraph.content1}</p>
          <p className="content">{thirdParagraph.content2}</p>
          <p className="subTitle">{thirdParagraph.subTitle2}</p>
          <p className="content">{thirdParagraph.content2_1}</p>
          <p className="content">{thirdParagraph.content2_2}</p>
          <p className="content">{thirdParagraph.content2_3}</p>

          <p className="subTitle">{thirdParagraph.subTitle3}</p>
          <p className="content">{thirdParagraph.content3_1}</p>
          <p className="content">{thirdParagraph.content3_2}</p>

          <p className="subTitle">{thirdParagraph.subTitle4}</p>
          <p className="content">{thirdParagraph.content4_1}</p>
          <p className="content">{thirdParagraph.content4_2}</p>
          <a href={'https://betterbody.co/pages/pp-provitalize-m'}>{thirdParagraph.content4_with_link}</a>
      </div>

      <div className='fourthParagraph'>
          <p className='contentTitle'>{fourthParagraph.title1}</p>
          <p className="content">{fourthParagraph.content1}</p>
          <p className="content">{fourthParagraph.content2}</p>
          <p className="subTitle">{fourthParagraph.subTitle1}</p>
          <p className="content">{fourthParagraph.content1_1}</p>
          <p className="content">{fourthParagraph.content1_2}</p>

          <p className="subTitle">{fourthParagraph.subTitle2}</p>
          <p className="content">{fourthParagraph.content2_1}</p>
          <p className="content">{fourthParagraph.content2_2}</p>

          <p className="subTitle">{fourthParagraph.subTitle3}</p>
          <p className="content">{fourthParagraph.content3_1}</p>
          <p className="content">{fourthParagraph.content3_2}</p>
          <p className="content">{fourthParagraph.content3_3}</p>
          <div className='content3_3'>
              {fourthParagraph.content3_3Item.map((item, index) => {
                  return <span className='content3_3Item' key={item}>{index + 1}.<span className='content10ItemInfo'>{item}</span></span>
              })}
          </div>

          <p className="content">{fourthParagraph.content3_4}</p>
          <p className="content">{fourthParagraph.content3_5}</p>
          <p className="content">{fourthParagraph.content3_6}</p>
          <p className="content">{fourthParagraph.content3_7}</p>

          <a href={'https://betterbody.co/pages/pp-provitalize-m'}>{fourthParagraph.content3_7_with_link}</a>
      </div>


      <div>
        <p className='referencesTitle'>{referencesTitle}</p>
          <div className='references'>
                  {references.map((item, index) => {
                      return <span className='referencesItem' key={item}>
                          <span className='referencesInfo'>{index + 1}. {item.text}</span>
                          <span className='link'>(<a href={item.link} >{item.link}</a>)</span>
                      </span>
                  })}
          </div>
      </div>
      <div>
          <p className='referencesTitle'>{disclaimerTitle}</p>
              {disclaimer.map((item) => {
                  return <span className='disclaimerItem' key={item}>
                      <span>{item}</span>
                  </span>
              })}
      </div>
  </div>
}
