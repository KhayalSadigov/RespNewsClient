/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import styles from "./index.module.scss";
import langCheck from "./language";

function AboutPage() {
  let store = useContext(DataContext);
  store.route.setData("about");
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <h1>{langCheck.head[store.lang.data]}</h1>
          <p>
            <b>{langCheck.content.name[store.lang.data]}</b>{" "}
            {langCheck.content.paragraph[store.lang.data]}
          </p>
          <ul>
            <li>
              <h3>{langCheck.content.paragraph1.name[store.lang.data]}</h3>
              <p>{langCheck.content.paragraph1.content[store.lang.data]}</p>
            </li>
            <li>
              <h3>{langCheck.content.paragraph2.name[store.lang.data]}</h3>
              <li>
                {langCheck.content.paragraph2.desc[store.lang.data]}
                <ol>
                  <li>
                    <b>
                      {
                        langCheck.content.paragraph2.content[store.lang.data]
                          .test1.name
                      }
                    </b>
                    {
                      langCheck.content.paragraph2.content[store.lang.data]
                        .test1.text
                    }
                  </li>
                  <li>
                  <b>
                      {
                        langCheck.content.paragraph2.content[store.lang.data]
                          .test2.name
                      }
                    </b>
                    {
                      langCheck.content.paragraph2.content[store.lang.data]
                        .test2.text
                    }
                  </li>
                  <li>
                  <b>
                      {
                        langCheck.content.paragraph2.content[store.lang.data]
                          .test3.name
                      }
                    </b>
                    {
                      langCheck.content.paragraph2.content[store.lang.data]
                        .test3.text
                    }
                  </li>
                  <li>
                  <b>
                      {
                        langCheck.content.paragraph2.content[store.lang.data]
                          .test4.name
                      }
                    </b>
                    {
                      langCheck.content.paragraph2.content[store.lang.data]
                        .test4.text
                    }
                  </li>
                  <li>
                  <b>
                      {
                        langCheck.content.paragraph2.content[store.lang.data]
                          .test5.name
                      }
                    </b>
                    {
                      langCheck.content.paragraph2.content[store.lang.data]
                        .test5.text
                    }
                  </li>
                </ol>
              </li>
            </li>
            <li>
              <h3>{langCheck.content.paragraph3.name[store.lang.data]} </h3>
              <p>
                {langCheck.content.paragraph3.content[store.lang.data].text1}
              </p>
              <p>
                {langCheck.content.paragraph3.content[store.lang.data].text2}
              </p>
            </li>
            <li>
              <h3>{langCheck.content.paragraph4.name[store.lang.data]}</h3>
              <p>{langCheck.content.paragraph4.content[store.lang.data]}</p>
            </li>
            <li>
              <h3>{langCheck.content.paragraph5.name[store.lang.data]}</h3>
              <p>{langCheck.content.paragraph5.content[store.lang.data]}</p>
            </li>
            <li>
              <h3>{langCheck.content.paragraph6.name[store.lang.data]}</h3>
              <p>{langCheck.content.paragraph6.content[store.lang.data]}</p>
            </li>
          </ul>
          <h1></h1>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
