import Link from "next/link";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div
      className="container"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      {/* simple profile */}
      <div className="row justify-content-start align-items-center">
        {/* Name and Contact info */}
        <div className="col me-auto">
          <Image
            src="/shadow-icon.gif"
            height={100}
            width={169}
            alt="Profile"
          />
          <h3>
            Jiyoon Ha
            <small className="text-secondary">punkkid001@gmail.com</small>
          </h3>
          <small>
            <a href="mailto:punkkid001@gmail.com">
              <i className="fas fa-at" />
            </a>{" "}
            <Link
              href="https://github.com/punkyoon"
              target="_blank"
              rel="noopener"
            >
              <i className="fab fa-github fa-md" />
            </Link>{" "}
            <Link
              href="https://medium.com/@punkyoon"
              target="_blank"
              rel="noopener"
            >
              <i className="fab fa-medium-m" />
            </Link>{" "}
            <Link
              href="https://linkedin.com/in/jiyoon-ha"
              target="_blank"
              rel="noopener"
            >
              <i className="fab fa-linkedin-in fa-md" />
            </Link>
          </small>{" "}
          <small>Seoul, South Korea</small>
        </div>
      </div>

      <hr style={{ marginBottom: "2rem" }} />

      <div className="row">
        <div className="col-md-6">
          {/* title */}
          <h4>Work Experiences</h4>
          <hr />

          {/* details */}
          <dl>
            <dt>
              Software Engineer{" "}
              <small>
                <span
                  className="spinner-border text-primary spinner-border-sm"
                  role="status"
                >
                  <span className="visually-hidden">
                    Somewhere in Pangyo, Seongnam
                  </span>
                </span>
                , 2024.01.15 ~ Current
              </small>
            </dt>
            <dd>
              Working as a backend engineer, currently focused on the generative
              AI domain.
              <div>
                <small className="text-secondary">
                  &gt; Rust, Axum, TypeScript, React, NextJS, Python, Celery,
                  AWS
                </small>
              </div>
            </dd>

            <dt>
              Software Engineer{" "}
              <small>
                <Link
                  href="https://www.rapportlabs.kr"
                  target="_blank"
                  rel="noopener"
                >
                  Rapportlabs
                </Link>
                , 2021.09.01 ~ 2024.01.05
              </small>
            </dt>
            <dd>
              Worked as a backend engineer with expertise in the e-commerce
              domain, focusing on product, fulfillment, and settlement.
              Additionally, Have experience as a team leader in a business
              tribe.
              <div>
                <small className="text-secondary">
                  &gt; Kotlin, Spring Boot, Groovy, Keycloak
                </small>

                <ul>
                  <li>
                    <small>
                      <Link
                        href="https://web.queenit.kr"
                        target="_blank"
                        rel="noopener"
                      >
                        Queenit
                      </Link>
                    </small>
                  </li>
                </ul>
              </div>
            </dd>

            <dt>
              Software Engineer{" "}
              <small>
                <Link
                  href="https://hyperconnect.com/?lang=en"
                  target="_blank"
                  rel="noopener"
                >
                  Hyperconnect
                </Link>
                , 2018.07.04 ~ 2021.05.16
              </small>
            </dt>
            <dd>
              Worked as a full-stack developer, familiar with i18n works, WebRTC
              and real-time communication on WebSocket. Successfully launched
              the web version of Hakuna, a video chat service.
              <div>
                <small className="text-secondary">
                  &gt; Python, Django, TypeScript, React, NextJS, Express,
                  Kotlin, Spring Boot
                </small>

                <ul>
                  <li>
                    <small>
                      <Link
                        href="https://hakuna.live"
                        target="_blank"
                        rel="noopener"
                      >
                        Hakuna (Meet, Chat, Live!)
                      </Link>
                    </small>
                  </li>
                  <li>
                    <small>
                      <Link
                        href="https://azarlive.com"
                        target="_blank"
                        rel="noopener"
                      >
                        Azar (Discover & Connect)
                      </Link>
                    </small>
                  </li>
                </ul>
              </div>
            </dd>

            <dt>
              Teaching Assistant <small>Fast Campus, 2017.03 ~ 2017.07</small>
            </dt>
            <dd>
              Worked as a teaching assistant at{" "}
              <Link
                className="link-secondary"
                href="https://m.blog.naver.com/fastcampus/220942981452"
                target="_blank"
                rel="noopener"
              >
                Web service development using Python & Django CAMP.
              </Link>
            </dd>

            <dt>
              Research Intern{" "}
              <small>Konkuk University WICE Lab, 2017.05 ~ 2017.06</small>
            </dt>
            <dd>
              Developed real-time data visualization tool for analyzing pet
              behavior data from the Bluetooth sensor.
            </dd>
          </dl>
        </div>

        <div className="col-md-6">
          <h4>Experiences</h4>
          <hr />

          <dl>
            <dt>
              Certified Trainee{" "}
              <small>
                <Link
                  className="link-dark"
                  href="https://swmaestro.org"
                  target="_blank"
                  rel="noopener"
                >
                  Software Maestro (8th)
                </Link>
                , 2017.08.02 ~ 2019.02.24
              </small>
            </dt>
            <dd>
              Developed backend for an identical person tracking system in
              multi-video.
            </dd>

            <dt>
              Student Evangelist{" "}
              <small>
                <Link
                  className="link-dark"
                  href="https://msdn.microsoft.com/microsoftstudentpartners"
                  target="_blank"
                  rel="noopener"
                >
                  Microsoft Student Partners (Korea)
                </Link>
                , 2016.09 ~ 2017.06
              </small>
            </dt>
            <dd>
              Organized a seminar with my team members on{" "}
              <Link
                className="link-secondary"
                href="http://web.archive.org/web/20161110184815/onoffmix.com/event/82705/"
                target="_blank"
                rel="noopener"
              >
                creating simple web services using Django (2016.11.29)
              </Link>{" "}
              at an event that provided an overview of Microsoft technology
              trends . Also shared the inferomation about TypeScript.
            </dd>

            <dt>
              Trainee{" "}
              <small>
                <Link
                  className="link-dark"
                  href="https://boostcamp.connect.or.kr/"
                  target="_blank"
                  rel="noopener"
                >
                  BoostCamp
                </Link>
                , 2017.01
              </small>
            </dt>
            <dd>Trained being an iOS developer.</dd>
          </dl>
        </div>

        <div className="col-md-6">
          <h4>Projects</h4>
          <hr />

          <div className="bd-example" style={{ paddingBottom: "20px" }}>
            {/* 2021 */}
            <details open>
              <summary>2021</summary>
              <dl>
                <dt>
                  <Link
                    href="https://github.com/punkyoon/bang-gwi"
                    target="_blank"
                    rel="noopener"
                  >
                    bang-gwi
                  </Link>{" "}
                  <small>Python</small>
                </dt>
                <small>
                  <i>
                    &gt; Based on the{" "}
                    <Link
                      className="link-secondary"
                      href="https://github.com/pjongy/shook-lang"
                      target="_blank"
                      rel="noopener"
                    >
                      {" "}
                      shook-lang
                    </Link>{" "}
                    project
                  </i>
                </small>
                <dd>A Korean-based programming language. Just for fun.</dd>
              </dl>
            </details>

            {/* 2020 */}
            <details open>
              <summary>2020</summary>
              <dl>
                <dt>
                  <Link
                    href="https://github.com/django-breaker/drf-case-middleware"
                    target="_blank"
                    rel="noopener"
                  >
                    drf-case-middleware
                  </Link>{" "}
                  <small>Python, PyPI</small>
                </dt>
                <small>
                  <i>
                    &gt; Based on the{" "}
                    <Link
                      className="link-secondary"
                      href="https://github.com/vbabiy/djangorestframework-camel-case"
                      target="_blank"
                      rel="noopener"
                    >
                      djangorestframework-camel-case
                    </Link>{" "}
                    project
                  </i>
                </small>
                <dd>
                  Middleware for Django REST Framework modifying
                  request/response data format.
                </dd>
              </dl>
            </details>

            {/* 2019 */}
            <details open>
              <summary>2019</summary>
              <dl>
                <dt>
                  <Link
                    href="https://github.com/punkyoon/ring-butter"
                    target="_blank"
                    rel="noopener"
                  >
                    ring-butter
                  </Link>{" "}
                  <small>Typescript, Jest, NPM</small>
                </dt>
                <dd>Circular buffer utility in Typescript.</dd>
              </dl>
            </details>

            {/* 2018 */}
            <details open>
              <summary>2018</summary>
              <dl>
                <dt>
                  D-RFS <small>C</small>
                </dt>
                <dd>
                  Dynamic RFS table management to improve packet processing
                  locality in the Linux.
                </dd>

                <dt>
                  <Link
                    href="https://github.com/punkyoon/city-night-timeline"
                    target="_blank"
                    rel="noopener"
                  >
                    city-night-timeline
                  </Link>{" "}
                  <small>Python, Django, Typescript, Vue.js</small>
                </dt>
                <dd>Timeline service available only at night.</dd>

                <dt>
                  <Link
                    href="https://github.com/punkyoon/nojambot"
                    target="_blank"
                    rel="noopener"
                  >
                    nojambot
                  </Link>{" "}
                  <small>Python, asyncio</small>
                </dt>
                <dd>Korean dad joker bot for Twitter and Slack.</dd>

                <dt>
                  <Link
                    href="https://github.com/eswww"
                    target="_blank"
                    rel="noopener"
                  >
                    pi-snap
                  </Link>{" "}
                  <small>
                    C, Linux Kernel Module, Sensor Driver, Socket Programming,
                    Python, asyncio
                  </small>
                </dt>
                <dd>
                  Desktop camera application with Raspberry-Pi using light
                  sensor, MCP3208, button, LED, and ultrasonic sensor.
                </dd>
              </dl>
            </details>

            {/* 2017 */}
            <details>
              <summary>2017</summary>
              <dl>
                <dt>
                  <Link
                    href="https://github.com/dzzp"
                    target="_blank"
                    rel="noopener"
                  >
                    ARGOS
                  </Link>{" "}
                  <small>
                    Python, Django, RESTful API, Video/Image Processing
                  </small>
                </dt>
                <dd>
                  Backend for an identical person tracking system in
                  multi-video.
                </dd>

                <dt>
                  <Link
                    href="https://github.com/punkyoon/pokinator"
                    target="_blank"
                    rel="noopener"
                  >
                    pokinator
                  </Link>{" "}
                  <small>Python, PyPI</small>
                </dt>
                <dd>Heroku-like random Pokemon name genereator.</dd>

                <dt>
                  knock-knock-bot{" "}
                  <small>Python, Flask, Chatbot, KakaoTalk</small>
                </dt>
                <dd>
                  Chatbot for KakaoTalk PlusFriends service to track delivery.
                </dd>

                <dt>
                  <Link
                    href="https://github.com/punkyoon/study-hard"
                    target="_blank"
                    rel="noopener"
                  >
                    study-hard
                  </Link>{" "}
                  <small>
                    Python, Django, WebSocket, PostgreSQL, Redis, Docker
                  </small>
                </dt>
                <dd>Web-based application for managing study group.</dd>

                <dt>
                  <Link
                    href="https://github.com/punkyoon/dust-attack"
                    target="_blank"
                    rel="noopener"
                  >
                    dust-attack
                  </Link>{" "}
                  <small>Python</small>
                </dt>
                <dd>Slackbot to inform air quality information.</dd>

                <dt>
                  <Link
                    href="https://github.com/punkyoon/beautiful-chart-service"
                    target="_blank"
                    rel="noopener"
                  >
                    beautiful-chart-service
                  </Link>{" "}
                  <small>Python, Flask, Socket.IO, billboard.js</small>
                </dt>
                <dd>Web-based real-time data visualization tool.</dd>

                <dt>
                  <Link
                    href="https://github.com/dduk-ddak"
                    target="_blank"
                    rel="noopener"
                  >
                    coding-night-live
                  </Link>{" "}
                  <small>
                    Python, Django, WebSocket, PostgreSQL, Redis, Docker
                  </small>
                </dt>
                <dd>
                  Web-based communication application for developing a software
                  together.
                </dd>
              </dl>
            </details>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Awards</h4>
          <hr />

          <dl>
            <dt>
              2018 KSC Outstanding Paper Award{" "}
              <small>
                <Link
                  className="link-dark"
                  href="https://www.kiise.or.kr"
                  target="_blank"
                  rel="noopener"
                >
                  KIISE
                </Link>
                , 2018.12.19
              </small>
            </dt>
            <dt>
              2018 Software Competition: 3rd Prize{" "}
              <small>Konkuk University, 2018.11.6</small>
            </dt>
            <dd>
              Implemented linux kernel module and patch to manage size of RFS
              table dynamically for improving packet processing locality.
            </dd>

            <dt>
              Best Dream Semester Project: 3rd Prize{" "}
              <small>Konkuk University, 2017.12.15</small>
            </dt>
            <dd>
              Developed smart presentation and discussion service based on web.
            </dd>

            <dt>
              K-ibwa ICT Mentoring Project: Silver Prize{" "}
              <small>IITP, 2017.11.30</small>
            </dt>
            <dd>
              Developed chatbot for KakaoTalk PlusFriends service. It can track
              delivery and make a delivery reservation.
            </dd>

            <dt>
              <Link
                className="link-dark"
                href="https://www.oss.kr/dev_competition_activities/show/ae3380d6-0639-4b07-8588-8ef54865d317"
                target="_blank"
                rel="noopener"
              >
                OSS World Challenge 2017 (11th): Silver Prize
              </Link>{" "}
              <small>
                <Link
                  className="link-dark"
                  href="https://www.kossa.kr/"
                  target="_blank"
                  rel="noopener"
                >
                  KOSSA
                </Link>
                , 2017.11.24
              </small>
            </dt>
            <dt>
              <Link
                className="link-dark"
                href="https://github.com/D2CampusFest/4th"
                target="_blank"
                rel="noopener"
              >
                2016 Naver D2 CAMPUS FEST: BeyondFEST
              </Link>{" "}
              <small>NAVER, 2017.08.30</small>
            </dt>
            <dt>
              <Link
                className="link-dark"
                href="https://github.com/D2CampusFest/4th"
                target="_blank"
                rel="noopener"
              >
                2016 Naver D2 CAMPUS FEST: 3rd Prize
              </Link>{" "}
              <small>NAVER, 2017.02.17</small>
            </dt>
            <dd>
              Developed web-based communication application for developing a
              software together.
            </dd>

            <dt>
              2016 MSP Best Evangelism Group: 1st Prize{" "}
              <small>Microsoft Korea, 2016.12.29</small>
            </dt>
            <dd>
              Successfully organized a seminar about web development with Python
              and Django.
            </dd>
          </dl>
        </div>

        <div className="col-md-6">
          <h4>OpenSource Contributions</h4>
          <hr />

          <dl>
            <dt>
              arctic <small>2024.10.30</small>
            </dt>
            <dd>
              <Link
                href="https://github.com/pilcrowonpaper/arctic/pull/184"
                target="_blank"
                rel="noopener"
              >
                #184
              </Link>{" "}
              Add Naver provider.
            </dd>

            <dt>
              crowdin-api-client-python <small>2021.4.22</small>
            </dt>
            <dd>
              <Link
                href="https://github.com/crowdin/crowdin-api-client-python/pull/9"
                target="_blank"
                rel="noopener"
              >
                #9
              </Link>{" "}
              Add <code>storageId</code> params.
              <br />
              <Link
                href="https://github.com/crowdin/crowdin-api-client-python/pull/7"
                target="_blank"
                rel="noopener"
              >
                #7
              </Link>{" "}
              Fix file uploading.
            </dd>

            <dt>
              facebook-sdk <small>2018.10.7</small>
            </dt>
            <dd>
              <Link
                href="https://github.com/mobolic/facebook-sdk/pull/436"
                target="_blank"
                rel="noopener"
              >
                #436
              </Link>{" "}
              Return result when calling delete_* method.
            </dd>

            <dt>
              django-allauth <small>2017.7.26, 2018.10.10</small>
            </dt>
            <dd>
              <Link
                href="https://github.com/pennersr/django-allauth/pull/1775"
                target="_blank"
                rel="noopener"
              >
                #1775
              </Link>{" "}
              Supports client_secret for Kakao OAuth API.
              <br />
              <Link
                href="https://github.com/pennersr/django-allauth/pull/2127"
                target="_blank"
                rel="noopener"
              >
                #2127
              </Link>{" "}
              Supports version up for Kakao OAuth API.
            </dd>

            <dt>
              hubblemon <small>2017.7.13</small>
            </dt>
            <dd>
              <Link
                href="https://github.com/naver/hubblemon/pull/21"
                target="_blank"
                rel="noopener"
              >
                #21
              </Link>{" "}
              Upgrade version of Django to 1.11 and refactoring.
            </dd>

            <dt>
              django-phonenumber-field <small>2017.4.15</small>
            </dt>
            <dd>
              <Link
                href="https://github.com/stefanfoulis/django-phonenumber-field/pull/169"
                target="_blank"
                rel="noopener"
              >
                #169
              </Link>{" "}
              Added Korean localization.
            </dd>
          </dl>
        </div>

        <div className="col-md-6">
          <h4>Education</h4>
          <hr />

          <dl>
            <dt>
              Konkuk University <small>2015.03.02 ~ 2019.02</small>
            </dt>
            <dd>Bachelor of Engineering (B.E.), Computer Engineering.</dd>

            <dt>
              Draper University <small>2018.01.17 ~ 2018.02.24</small>
            </dt>
            <dd>
              Completed intensive training to build a solid foundation for
              successful entrepreneurship.
            </dd>
          </dl>
        </div>

        <div className="col-md-6">
          <h4>ETC</h4>
          <hr />

          <dl>
            <dt>
              Tutorial Coach{" "}
              <small>
                <Link
                  className="link-dark"
                  href="https://djangogirls.org/seoul/"
                  target="_blank"
                  rel="noopener"
                >
                  Django Girls Seoul
                </Link>
                , 2019.09.07
              </small>
            </dt>
            <dd>
              Helped students using Windows(OS) finish the{" "}
              <Link
                href="https://tutorial.djangogirls.org/en/"
                target="_blank"
                rel="noopener"
              >
                Django Girls tutorial.
              </Link>
            </dd>

            <dt>
              Tutor{" "}
              <small>
                Samsung Convergence Software Course, 2016.03 ~ 2018.06
              </small>
            </dt>
            <dd>Tutored students who are minoring in computer engineering.</dd>

            <dt>
              March Seminar Speaker{" "}
              <small>Django Girls Seoul, 2017.03.26</small>
            </dt>
            <dd>
              Presented on
              <Link
                href="https://drive.google.com/file/d/0B5acoZNCGpvrX3IwNGJ0TlZ0Q3M/view"
                target="_blank"
                rel="noopener"
              >
                Personal Project Experiences with Django.
              </Link>
            </dd>

            <dt>
              Teaching Assistant <small>Introduction to Azure, 2017.03</small>
            </dt>
            <dd>Assisted students to follow the project well.</dd>

            <dt>
              D2 CAMPUS FEST Tech Talk Speaker{" "}
              <small>NAVER D2 CAMPUS FEST, 2017.02.08</small>
            </dt>
            <dd>
              Presented on
              <Link
                href="https://www.slideshare.net/deview/django-websocket"
                target="_blank"
                rel="noopener"
              >
                How to use WebSocket in Django.
              </Link>
            </dd>

            <dt>
              October Seminar Speaker{" "}
              <small>Django Girls Seoul, 2016.10.30</small>
            </dt>
            <dd>
              Presented on
              <Link
                href="https://drive.google.com/file/d/0B5acoZNCGpvrV0g5MzlNNWQyY1E/view"
                target="_blank"
                rel="noopener"
              >
                A Guide for Beginners to Tour Django.
              </Link>
            </dd>
          </dl>
        </div>

        {/* Publications */}
        <div className="col-md-6">
          <h4>Publications</h4>
          <hr />

          <dl>
            <dt>
              <Link
                className="link-dark text-decoration-underline"
                href="https://www.riss.kr/link?id=A106040703"
                target="_blank"
                rel="noopener"
              >
                Dynamic RFS Table Management to Improve Packet Processing
                Locality in the Linux
              </Link>{" "}
              <small>2018.12.21</small>
            </dt>
            <dd>Proceedings of Korea Software Congress Vol.2018 No.12</dd>

            <dt>
              <Link
                className="link-dark text-decoration-underline"
                href="https://www.riss.kr/link?id=A100317065"
                target="_blank"
                rel="noopener"
              >
                Encryption technique using regular hexagon
              </Link>{" "}
              <small>2015.01.23</small>
            </dt>
            <dd>
              Proceedings of The Korean Association of Computer Education
              Conference Vol.19 No.1
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
