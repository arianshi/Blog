import "./styles.css";

export function Blog({data}) {
  const {
      firstParagraph, secondParagraph, thirdParagraph,
      fourthParagraph, referencesTitle, references,
      disclaimerTitle, disclaimer }  = data;
  return <div className='contentWrapper'>
      <div className='firstParagraph'>
          <p className='contentTitle'>{firstParagraph.title}</p>
          {firstParagraph.content.map((item) => {
              return (item.text ? <p key={item.text} className='content'>{item.text}</p> :
                  <p key={item.textRich} className='content' dangerouslySetInnerHTML={{__html: item.textRich}}/>)
          })}
          <div className='content10'>
              {firstParagraph.content10Item.map((item, index) => {
                  return <span className='content10Item' key={item}>{index + 1}.<span
                      className='content10ItemInfo'>{item}</span></span>
              })}
          </div>
      </div>

      <div className='secondParagraph'>
          <p className='contentTitle'>{secondParagraph.title}</p>
          {secondParagraph.content.map((item) => {
              return (<span key={item.subTitle}>
                  <p className="subTitle">{item.subTitle}</p>
                  {item.content.map((item) => {
                      return (item.text ? <p key={item.text} className='content'>{item.text}</p> :
                          <p key={item.textRich} className='content'
                             dangerouslySetInnerHTML={{__html: item.textRich}}/>)
                  })}
              </span>)
          })}
      </div>

      <div className='thirdParagraph'>
          <p className='contentTitle'>{thirdParagraph.title}</p>
          {thirdParagraph.content.map((item, index) => {
              return (<span key={item + index}>
                  <p className="subTitle">{item.subTitle}</p>
                  {item.content.map((item) => {
                      return (item.text ? <p key={item.text} className='content'>{item.text}</p> :
                          <p key={item.textRich} className='content'
                             dangerouslySetInnerHTML={{__html: item.textRich}}/>)
                  })}
              </span>)
          })}
          <a href={'https://betterbody.co/pages/pp-provitalize-m'}>{thirdParagraph.content4_with_link}</a>
      </div>

      <div className='fourthParagraph'>
          <p className='contentTitle'>{fourthParagraph.title}</p>
          {fourthParagraph.content.map((item) => {
              return (<span key={item.subTitle}>
                  <p className="subTitle">{item.subTitle}</p>
                  {item.content.map((item) => {
                      return (<span key={item.text}>
                          <p key={item.text} className='content'>{item.text}</p>
                          {
                              item?.textItem?.map((info, index) => {
                                  return (<div key={info} className='content3_3'>
                                      <span className='content3_3Item' key={info}>{index + 1}.<span
                                          className='content10ItemInfo'>{info}</span></span>
                                  </div>)
                              })
                          }
                      </span>)
                  })}
              </span>)
          })}
          <a href={'https://betterbody.co/pages/pp-provitalize-m'}>{fourthParagraph.content3_7_with_link}</a>
      </div>
      <div>
          <p className='referencesTitle'>{referencesTitle}</p>
          <div className='references'>
              {references.map((item, index) => {
                  return <span className='referencesItem' key={item.text}>
                          <span className='referencesInfo'>{index + 1}. {item.text}</span>
                          <span className='link'>(<a href={item.link}>{item.link}</a>)</span>
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
