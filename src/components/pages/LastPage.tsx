import '../../styles/style-lastPage.css';

import { DataImageType, PageType } from '../../types/types.ts';
type LastPagePropsType = {
  lastPage: PageType;
  images: DataImageType;
};

function LastPage({ lastPage, images }: LastPagePropsType) {
  let logoIMg = '/logos/logoSuescaventuraWord-sinFondo.png';
  const logoAcgme = '/logos/LOGOacgme.png';
  const signature = '/logos/imageFirma.png';

  const {
    page,
    idImg,
    photoGroup,
    texts: { parr, parr2, parr3 },
  } = lastPage;

  return (
    <>
      <section className={`section__lastpage section__lastpage--${page}`}>
        <div className={`lastpage__container lastpage__container--${page}`}>
          <img
            src={`${images[idImg].imgUrl}`}
            alt={`${images[idImg].imgUrl}`}
            className={`lastpage__bgImg lastpage__bgImg--${page}`}
          />

          <div className='page__content'>
            <div className='page__content--parr2'>
              {parr2.map((p, ip) => (
                <p className='parr2--item' key={`page__parr2--item--${ip}`}>
                  {/* {parr2[ip]} */}
                  {p}
                </p>
              ))}
            </div>

            <p className='page__content--parr'>{parr}</p>

            <div className='page__content--identity'>
              {/* <div className='signature'> */}
              <img
                src={`${signature}`}
                alt={`signature`}
                className='logo__identity--signature'
              />
              {/* </div> */}
              <div className='managerData'>
                {parr3?.map((p, ip) => (
                  <p
                    className='page__parr3--item'
                    key={`page__parr3--item--${ip}`}
                  >
                    {parr3[ip]}
                  </p>
                ))}
              </div>
              <div className='logo__identity'>
                <img
                  src={`${logoIMg}`}
                  alt={`logo`}
                  className='logo__identity--logoImg'
                />

                <img
                  src={`${logoAcgme}`}
                  alt={`logoAcgme`}
                  className='logo__identity--logoAcgme'
                />
              </div>
            </div>
          </div>

          <div
            className={`photoGroup__container photoGroup__container--page--${page}`}
          >
            {photoGroup!.length > 0 &&
              photoGroup?.map((photo, i) => (
                <img
                  key={`photoGroup__${page}__photo--${i}`}
                  src={`${images[photo.idImg].imgUrl}`}
                  alt={`${images[idImg]}`}
                  className={`page__photoGroup page__photoGroup--${page} page__photoGroup--${page}--${i}`}
                />
              ))}
          </div>
        </div>
      </section>
      
    </>
  );
}

export default LastPage;
