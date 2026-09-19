import { Constrained } from "@/components/layout/constrained";
import { Section, SectionTitle } from "@/components/layout/section";
import { Entry, EntryList } from "@/components/entry";
import { htwBerlin } from "@/content/organizations";

export function Education() {
  return (
    <Section id="education">
      <Constrained>
        <SectionTitle>Education</SectionTitle>

        <EntryList>
          <Entry
            organization={htwBerlin}
            title="M.Sc. Applied Computer Science"
            period="2023 – 2025"
            note="Final grade 1.3"
          >
            Master thesis on object placement in Augmented Reality
          </Entry>
          <Entry
            organization={htwBerlin}
            title="B.Sc. Applied Computer Science"
            period="2019 – 2022"
            note={
              <>
                Final grade 1.28,{" "}
                <span className="italic">magna cum laude</span>
              </>
            }
          >
            Bachelor thesis on optimizing web applications for Google’s Core Web
            Vitals
          </Entry>
        </EntryList>
      </Constrained>
    </Section>
  );
}
