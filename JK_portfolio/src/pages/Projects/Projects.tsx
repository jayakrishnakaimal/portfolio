import React from 'react';
import './Projects.css';
import { CaseStudy } from '../../types';

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Redesigning enterprise SaaS onboarding',
    problem:
      '68% of new enterprise accounts dropped off within 7 days of signup. Leadership saw a training problem; Customer Success saw something deeper.',
    systemView:
      'Onboarding sat across Product, Engineering and Customer Success. Fixing the screens alone would not have fixed the journey, so I aligned all three on one shared metric first.',
    role: 'Design Manager + Research Lead · 4 designers, 1 researcher, 2 PMs',
    decisions: [
      {
        evidence:
          '18 moderated sessions, 6 months of funnel data and 4 CSM call shadows. The journey ran 47 steps; users expected 8.',
        decision:
          'Reframed the problem from "confusing UI" to "missing mental model", and presented it to the C-suite as a Pain Gradient map.',
        effect:
          'Product and Engineering committed to the work as a business problem, not a training gap.',
      },
      {
        evidence:
          'Teams were measuring different things, so each could call its own part a success.',
        decision:
          'Set one shared success metric: cut time-to-first-value from 7 days to 2.',
        effect:
          'Trade-offs between teams were settled against one number instead of opinion.',
      },
      {
        evidence:
          'A PM wanted to skip user testing to save time.',
        decision:
          'Wrote a 2-page risk brief quantifying the cost of a wrong assumption and kept 3 rounds of testing.',
        effect:
          'Each round turned around in about 48 hours, so testing did not slow delivery.',
      },
      {
        evidence:
          'The change touched every new enterprise account.',
        decision:
          'Shipped in phases: a 15% cohort first, then full rollout.',
        effect:
          'Risk was contained before the change reached all accounts.',
      },
    ],
    outcomes: [
      { value: '↓ 52%', label: 'Drop-off within 7 days' },
      { value: '42 → 58', label: 'NPS (↑ 38%)' },
      { value: '$4.2M', label: 'ARR retained from at-risk accounts' },
    ],
    lesson:
      'The most important design decision was not a UI choice. It was reframing the problem, which got engineering and product genuinely invested in the outcome.',
  },
  {
    id: 2,
    title: 'Building a design system across 3 product lines',
    problem:
      'Three teams built independently. Over 4,000 inconsistent components, engineers rebuilding UI every sprint, and design reviews taking 3× longer than they should.',
    systemView:
      'A design system only works if design, code and governance move together. I treated tokens, components, contribution rules and adoption as one system.',
    role: 'Design Manager · Design System Council across 3 squads',
    decisions: [
      {
        evidence:
          'Audit of all three products catalogued 4,200 UI elements.',
        decision:
          'Consolidated them into 180 core components rather than starting from a blank library.',
        effect:
          'The system reflected what teams already used, which lowered the cost of switching.',
      },
      {
        evidence:
          'Design and code drifted apart because tokens lived only in design files.',
        decision:
          'Named tokens semantically, not visually, and worked with DevOps to publish them as an npm package used by all 3 repos.',
        effect:
          'Design and code now share one source of truth, which is where the handoff gains came from.',
      },
      {
        evidence:
          'Systems fail when one central team owns everything.',
        decision:
          'Formed a Design System Council (1 designer per squad + 1 eng lead) and ran monthly Office Hours.',
        effect:
          'Squads helped shape the system, and I collected adoption feedback every month.',
      },
    ],
    outcomes: [
      { value: '↓ 60%', label: 'Design review time' },
      { value: '4.1×', label: 'Faster design-to-dev handoff' },
      { value: '6 months', label: 'To adoption by all product squads' },
    ],
    lesson:
      'Build reusable thinking, not one-off solutions. The governance model mattered as much as the components.',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Case <span>Studies</span></h2>
        <p className="projects__intro">
          Each case study traces the evidence behind a decision, the decision
          itself, and what it changed for the product.
        </p>
        <div className="projects__list">
          {caseStudies.map((study) => (
            <article key={study.id} className="case-study">
              <header className="case-study__header">
                <h3 className="case-study__title">{study.title}</h3>
                <p className="case-study__role">{study.role}</p>
              </header>

              <p className="case-study__problem">{study.problem}</p>

              <div className="case-study__system">
                <span className="case-study__label">Systems view</span>
                <p>{study.systemView}</p>
              </div>

              <ol className="case-study__decisions">
                {study.decisions.map((d) => (
                  <li key={d.decision} className="decision">
                    <div className="decision__col">
                      <span className="case-study__label">Evidence</span>
                      <p>{d.evidence}</p>
                    </div>
                    <div className="decision__col decision__col--key">
                      <span className="case-study__label">Decision</span>
                      <p>{d.decision}</p>
                    </div>
                    <div className="decision__col">
                      <span className="case-study__label">Effect</span>
                      <p>{d.effect}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <ul className="case-study__outcomes">
                {study.outcomes.map((o) => (
                  <li key={o.label} className="outcome">
                    <span className="outcome__value">{o.value}</span>
                    <span className="outcome__label">{o.label}</span>
                  </li>
                ))}
              </ul>

              {study.lesson && (
                <blockquote className="case-study__lesson">{study.lesson}</blockquote>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
