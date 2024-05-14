import { Link, NonIndexRouteObject, useLoaderData } from 'react-router-dom'
import Container from '../../components/Container'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import PostSidebar from '../../components/post/PostSidebar'
import ShareSocialList from '../../components/utils/ShareSocialList'
import { FaShare } from 'react-icons/fa'
import PostSingle from '../../components/post/PostSingle'

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return {
    title: '4 mẫu váy "dừ" và nóng bức, không nên mặc đi du lịch',
    content: `<p><a href="https://kenh14.vn/vay-lien.html" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Váy liền</a><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">&nbsp;"chiếm sóng" phong cách đi du lịch của chị em mỗi khi mùa hè về. Điều này rất dễ hiểu vì váy liền không chỉ đem đến cảm giác thoải mái, nhẹ mát khi diện, mà còn giúp vẻ ngoài trở nên nổi bật, lên hình "sống ảo" hút mắt hơn. Váy liền xinh tươi, nữ tính là vậy nhưng không phải kiểu nào cũng phù hợp để mặc đi du lịch. Một số kiểu váy liền dễ khiến vẻ ngoài của chị em trở nên "dừ" hơn, hoặc tạo cảm giác bất tiện, không thoải mái. Sau đây là 4 mẫu váy chị em không nên xếp vào vali đi du lịch.</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Váy quá dài</strong></p><p class="ql-align-center"><a href="https://kenh14cdn.com/203336854389633024/2024/4/24/photo-4-17139735977221231819705.jpg" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: transparent;"><img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2024/4/24/photo-4-17139735977221231819705.jpg" alt="4 mẫu váy dừ và nóng bức, không nên mặc đi du lịch - Ảnh 1." height="544" width="680"></a></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Khi đi du lịch, sự thuận tiện luôn được đặt lên hàng đầu vì chị em thường phải di chuyển khá nhiều. Do đó, những chiếc váy quá dài không phải là lựa chọn lý tưởng trong các chuyến du lịch. Không chỉ tạo cảm giác luộm thuộm, vướng víu, váy quá dài còn có thể khiến chiều cao của chị em bị "dìm".</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Các nàng nên ưu tiên váy dài trên mắt cá chân hoặc những chiếc váy ngắn trẻ trung, tôn dáng. Để hoàn thiện các set váy đi du lịch thoải mái, sành điệu, chị em nên chọn những kiểu giày như sandal quai mảnh, giày mule, giày búp bê tối giản hoặc sneaker trắng…</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Váy voan nhiều lớp</strong></p><p class="ql-align-center"><a href="https://kenh14cdn.com/203336854389633024/2024/4/24/photo-3-1713973595870129795315.jpg" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: transparent;"><img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2024/4/24/photo-3-1713973595870129795315.jpg" alt="4 mẫu váy dừ và nóng bức, không nên mặc đi du lịch - Ảnh 2." height="544" width="680"></a></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Váy voan ghi điểm ở sự nữ tính, bay bổng nhưng mẫu váy này không phải là lựa chọn lý tưởng để mặc đi du lịch, đặc biệt là khi thời tiết nóng bức. Váy voan thường có nhiều lớp để đảm bảo sự tinh tế, kín đáo. Đây chính là lý do, váy voan có thể tạo cảm giác nóng bức, không thấm hút mồ hôi hiệu quả.</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Những mẫu váy chất liệu vải thoáng mát như thô đũi, lụa hay cotton là lựa chọn phù hợp nhất với các chuyến du lịch. Ngoài ra, chị em hãy ưu tiên váy mang các tông màu sáng như trắng, be hoặc pastel để tránh hấp thụ nhiệt.</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Váy sơ mi đứng dáng</strong></p><p class="ql-align-center"><a href="https://kenh14cdn.com/203336854389633024/2024/4/24/photo-2-17139735934871243948156.jpg" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: transparent;"><img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2024/4/24/photo-2-17139735934871243948156.jpg" alt="4 mẫu váy dừ và nóng bức, không nên mặc đi du lịch - Ảnh 3." height="544" width="680"></a></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Váy sơ mi khá phổ biến trong mùa hè nhưng xoay quanh mẫu váy này cũng có một số phiên bản khác nhau. Chị em nên tránh váy sơ mi đứng dáng vì lựa chọn này tạo cảm giác như chị em đang tới công sở, chứ không phải đi du lịch.</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Các mẫu váy sơ mi chất liệu vải nhẹ mát, phom dáng bay bổng là lựa chọn sáng suốt hơn. Kiểu váy này mang đến hiệu quả "hack" tuổi, tạo cảm giác dễ chịu khi mặc. Chị em đừng chỉ giới hạn phong cách trong những mẫu váy sơ mi màu trung tính. Thay vào đó, hãy làm mới style đi du lịch với váy sơ mi kẻ, váy sơ mi màu rực rỡ hoặc váy sơ mi tông màu pastel ngọt ngào nhưng vẫn trang nhã.</span></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Váy đuôi cá</strong></p><p class="ql-align-center"><a href="https://kenh14cdn.com/203336854389633024/2024/4/24/photo-1-17139735922591708377826.jpg" rel="noopener noreferrer" target="_blank" style="background-color: rgb(255, 255, 255); color: transparent;"><img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2024/4/24/photo-1-17139735922591708377826.jpg" alt="4 mẫu váy dừ và nóng bức, không nên mặc đi du lịch - Ảnh 4." height="544" width="680"></a></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Váy đuôi cá là lựa chọn yêu thích của nhiều chị em vì diện lên sang chảnh, yêu kiều. Tuy nhiên, kiểu váy này phù hợp với các buổi tiệc hoặc sự kiện trang trọng hơn là những chuyến du lịch. Chưa hết, váy đuôi cá còn có thể cộng tuổi cho người diện, chị em không nên chọn mẫu váy này. Muốn có được vẻ nữ tính, yêu kiều, các nàng nên chọn váy tay bồng, váy xếp ly hoặc váy bèo nhún bay bổng, phóng khoáng. Các mẫu váy này ăn nhập với các chuyến du lịch, đồng thời giúp chị em có ảnh "sống ảo" hút mắt.</span></p><p class="ql-align-right"><em style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Ảnh: Sưu tầm</em></p><p><br></p>`,
    postCategory: {
      title: 'Tin mới',
      slug: 'tin-moi',
    }
  }
}

const PostDetail = () => {
  const data = useLoaderData() as any

  return (
    <>
      <section>
        <Container className='py-6'>
          <Breadcrumb>
            <Breadcrumb.Item icon={HiHome}>
              <Link to={"/"}>Trang chủ</Link>
            </Breadcrumb.Item>
            {data?.postCategory &&
              <Breadcrumb.Item>
                <Link to={"/blogs/" + data?.postCategory.slug}>{data?.postCategory.title}</Link>
              </Breadcrumb.Item>
            }
            <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section className='mb-6'>
        <Container id='main-content' className='flex'>
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="flex space-x-4">
              <div className="flex-none text-center">
                <div className="bg-primary-50 px-2 py-1 text-primary-500 font-semibold text-lg">04</div>
                <div className="px-2 py-1 bg-primary-500 text-white text-sm">Thg 2</div>
              </div>
              <div className="flex-grow min-w-0">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-500">{data.title}</h1>
                <p className='text-xs mt-2 text-gray-500'>4 lượt xem</p>
              </div>
            </div>

            <div className="mt-6 prose-sm md:prose-base" dangerouslySetInnerHTML={{ __html: data.content}}></div>
            
            <p className="mt-6 flex items-center space-x-3">
              <FaShare />
              <span className='text-xl font-semibold'>Chia sẻ bài viết</span>
            </p>
            <ShareSocialList className='mt-4' />

            <div className="mt-12">
              <h6 className="text-xl font-bold border-t pt-6">Bài viết liên quan</h6>
              <swiper-container class="mt-6 -mx-1.5 sm:-mx-2.5"
                  slides-per-view={2}
                  breakpoints={
                    JSON.stringify({
                      640:{
                        slidesPerView: 2
                      },
                      768: {
                        slidesPerView: 3
                      }
                    })
                  }
                >
                  {new Array(7).fill(0).map((v,i) =>
                    <swiper-slide key={i} class='px-1.5 sm:px-2.5 pb-2'>
                      <PostSingle />
                    </swiper-slide>
                  )}
                </swiper-container>
            </div>
          </div>
          <PostSidebar className='lg:w-1/3 xl:w-1/4 lg:ml-4'/>
        </Container>
      </section>
    </>
  )
}

PostDetail.loader = loader;

export default PostDetail