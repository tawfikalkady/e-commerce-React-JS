/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../home/Tags";
import PopularPost from "../home/PopularPost";
//3.17.41
// **/_ Single Blog Page_/**
const socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  console.log(id);
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"single blog pages"} curPage={"blog / blog details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img 
                                src={item.imgUrl} 
                                alt="" 
                                className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    <ul className="lab-ul">
                                      {item.metaList.map((val, i) => (
                                        <li key={i}>
                                          <i className={val.iconName}></i>{' '}
                                          {val.text}
                                        </li>
                                      ))}
                                    </ul>
                                  </ul>
                                </div>
                                <p> Vestibulum placerat malesuada ex, ac pharetra mi fermentum in. Fusce non elit at augue posuere feugiat a sed enim. Morbi consequat, orci a accumsan vestibulum, diam mauris porta mauris, non sodales arcu velit lacinia libero. Aliquam pellentesque erat quis eros auctor, ut iaculis lorem placerat. Ut mauris augue, elementum a dignissim non</p>
                                
                                <blockquote>
                                  <p> Vestibulum placerat malesuada ex, ac pharetra mi fermentum in. Fusce non elit at augue posuere feugiat a sed enim. Morbi consequat, orci a accumsan vestibulum, diam mauris porta mauris, non sodales arcu velit lacinia libero. Aliquam pellentesque erat quis eros auctor, ut iaculis lorem placerat. Ut mauris augue, elementum a dignissim non</p>
                                  <cite>
                                    <a href="#">...melissa hunter</a>
                                  </cite>
                                </blockquote>

                                <p> Vestibulum placerat malesuada ex, ac pharetra mi fermentum in. Fusce non elit at augue posuere feugiat a sed enim. Morbi consequat, orci a accumsan vestibulum, diam mauris porta mauris, non sodales arcu velit lacinia libero. Aliquam pellentesque erat quis eros auctor, ut iaculis lorem placerat. Ut mauris augue, elementum a dignissim non</p>
                                
                                <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                
                                <p> Vestibulum placerat malesuada ex, ac pharetra mi fermentum in. Fusce non elit at augue posuere feugiat a sed enim. Morbi consequat, orci a accumsan vestibulum, diam mauris porta mauris, non sodales arcu velit lacinia libero. Aliquam pellentesque erat quis eros auctor, ut iaculis lorem placerat. Ut mauris augue, elementum a dignissim non</p>
                                
                                <div className="video-thumb">
                                  <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                  <a href="https://youtu.be/dGZ2ye3N1pk?si=58cY3VrwhXjGIBhQ" 
                                  className="video-button popup"
                                  target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p> Vestibulum placerat malesuada ex, ac pharetra mi fermentum in. Fusce non elit at augue posuere feugiat a sed enim. Morbi consequat, orci a accumsan vestibulum, diam mauris porta mauris, non sodales arcu velit lacinia libero. Aliquam pellentesque erat quis eros auctor, ut iaculis lorem placerat. Ut mauris augue, elementum a dignissim non</p>
                                
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">agency</a>
                                    </li>
                                    <li>
                                      <a href="#">business</a>
                                    </li>
                                    <li>
                                      <a href="#">personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {
                                      socialList.map((val, i) => (
                                        <li key={i}>
                                          <a href="#" className={val.className}>
                                            <i className={val.iconName}></i>
                                          </a>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))

                          }
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i>previous blog
                          </a>
                          <a href="#" className="title">
                          lorem placerat. Ut mauris augue, elementum a dignissim
                          </a>
                        </div>

                        <div className="right">
                          <a href="#" className="prev">
                            <i className="icofont-double-right"></i>next blog
                          </a>
                          <a href="#" className="title">
                          lorem placerat. Ut mauris augue, elementum a dignissim
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </article>
            </div>


            <div className="col-lg-4 col-12">
              <aside>
                <Tags/>
                <PopularPost/>
              </aside>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
