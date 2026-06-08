import Layout from "../../components/Layout";

const cases = [
  {
    number: "Case 1",
    title: "Recurrent Hernia Following Previous Surgery",
    description: [
      "A patient presented with a recurrent hernia after prior surgical intervention, with persistent symptoms and increasing discomfort.",
      "The complexity of the case required reassessment of previous repair methods, careful evaluation of tissue integrity, and planning of a modified laparoscopic approach designed to reduce recurrence risk while supporting long-term structural stability.",
      "The procedure was carried out using minimally invasive techniques with focus on precision, recovery, and reinforcement of the affected region.",
    ],
  },
  {
    number: "Case 02",
    title: "Complex Gastrointestinal Condition Requiring Staged Laparoscopic Management",
    description: [
      "The condition involved multiple factors that made standard surgical intervention insufficient.",
      "A staged laparoscopic approach was planned to allow careful correction while minimizing unnecessary surgical trauma and maintaining patient stability throughout treatment.",
      "The procedure required detailed pre-operative planning, controlled execution, and long-term outcome consideration at every stage.",
    ],
  },
  {
    number: "Case 03",
    title: "Thoracic Procedure Performed Using Minimally Invasive Access",
    description: [
      "A thoracic surgical condition requiring intervention was managed using video-assisted thoracoscopic techniques (VATS).",
      "The minimally invasive approach allowed improved visualization and surgical precision while supporting reduced recovery time and lower post-operative discomfort compared to traditional open access methods.",
    ],
  },
  {
    number: "Case 04",
    title: "Advanced Colorectal Procedure",
    description: [
      "A colorectal condition requiring surgical correction was approached laparoscopically after careful evaluation of anatomical and procedural considerations.",
      "The focus remained on achieving effective surgical correction while preserving function and supporting smoother post-operative recovery.",
    ],
  },
  {
    number: "Case 05",
    title: "Hiatus Hernia Requiring Advanced Laparoscopic Repair",
    description: [
      "The patient presented with symptoms affecting daily comfort and quality of life, requiring surgical intervention following clinical evaluation and investigation.",
      "A laparoscopic repair was planned and carried out with emphasis on anatomical precision, reduced recovery burden, and durable long-term outcome.",
    ],
  },
];

 const approachItems = [
    {
      className: "understand",
      text: (
        <>
          understand
          <br />
          the problem fully
        </>
      ),
    },
    {
      className: "avoid",
      text: (
        <>
          avoid unnecessary
          <br />
          intervention
        </>
      ),
    },
    {
      className: "plan",
      text: <>plan carefully</>,
    },
    {
      className: "outcomes",
      text: (
        <>
          prioritize long-term
          <br />
          outcomes
        </>
      ),
    },
    {
      className: "operate",
      text: <>operate precisely</>,
    },
  ];

export default function SelectedWorkPage() {
  return (
  <main className="inside-page about-page">
             <Layout>

      <section className="inside-banner">
        <div className="container">
          <h1>Selected Work</h1>
        </div>
      </section>

      <section className="selected-work-section green-bg">
        <div className="container">
          {/* Intro Block */}
          <div className="selected-work-intro green-bg">
            <div className="work-image placeholder"></div>

            <div className="intro-content">
              <h2>Selected Work
                <span className="subheading">Cases that required more than
                <br />
                routine decisions.</span>
              </h2>

              <p>
                Some surgical conditions follow familiar paths. Others demand
                deeper evaluation, careful planning, and approaches shaped
                around the specifics of the case itself.
              </p>

              <p>
                Over the years, Dr. Sanjay Sonar has managed a wide range of
                complex surgical cases using advanced laparoscopic and minimally
                invasive techniques wherever appropriate.
              </p>

              <p>
                The cases presented here reflect the kind of work that often
                requires precision, adaptability, and thoughtful surgical
                judgment beyond standard pathways.
              </p>
            </div>
          </div>

          {/* Case Blocks */}
          <div className="case-list">
            {cases.map((item, index) => (
              <div
                className={`case-row ${index % 2 === 0 ? "text-left" : "text-right"
                  }`}
                key={item.number}
              >
                <div className="case-content">
                  <h2>{item.number}
                    <span className="subheading">{item.title}</span>
                  </h2>
                 

                  {item.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="case-image placeholder"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="approach-cases-section white-bg">
      <div className="container">
        <div className="approach-heading">
          <h2>Approach Across Cases</h2>
          <p>
            While every condition is different, the approach remains consistent:
          </p>
        </div>

        <div className="approach-flow-stage">
          <svg
            className="approach-svg"
            viewBox="0 0 2048 520"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* top row lines */}
            <path className="flow-line line-1" d="M72 118 H238" />
            <path className="flow-line line-2" d="M660 118 H900" />
            <path className="flow-line line-3" d="M1368 118 H1615" />

            {/* bottom row lines */}
            <path className="flow-line line-4" d="M965 340 H1178" />
            <path className="flow-line line-5" d="M1615 340 H1830 V205" />

            {/* dots */}
            <circle className="flow-dot dot-1" cx="72" cy="118" r="12" />
            <circle className="flow-dot dot-2" cx="900" cy="118" r="12" />
            <circle className="flow-dot dot-3" cx="1615" cy="118" r="12" />
            <circle className="flow-dot dot-4" cx="965" cy="340" r="12" />
            <circle className="flow-dot dot-5" cx="1615" cy="340" r="12" />
          </svg>

          <div className="approach-label label-understand">
            understand
            <br />
            the problem fully
          </div>

          <div className="approach-label label-avoid">
            avoid unnecessary
            <br />
            intervention
          </div>

          <div className="approach-label label-plan">
            plan carefully
          </div>

          <div className="approach-label label-outcomes">
            prioritize long-term
            <br />
            outcomes
          </div>

          <div className="approach-label label-operate">
            operate precisely
          </div>
        </div>

        <div className="approach-closing">
          <h2>Closing</h2>

          <p>
            Over time, complex surgery becomes more than technical execution.
          </p>

          <p>
            It becomes the ability to approach uncertainty with clarity,
            patience, and precision.
          </p>
        </div>
      </div>
    </section>
    </Layout>
   </main>
  );
}