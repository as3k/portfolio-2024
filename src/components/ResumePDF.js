import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { resumeData } from "@/lib/resume-data";

const colors = {
  teal: "#0d9488",
  black: "#000000",
  darkGray: "#333333",
  mediumGray: "#666666",
  lightGray: "#999999",
  border: "#e5e7eb",
  skillBg: "#f3f4f6",
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.4,
    color: colors.darkGray,
  },
  header: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: colors.black,
    marginBottom: 4,
    lineHeight: 1,
  },
  title: {
    fontSize: 11,
    color: colors.teal,
    marginBottom: 10,
    marginTop: 2,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  contactItem: {
    fontSize: 9,
    color: colors.mediumGray,
  },
  contactLink: {
    fontSize: 9,
    color: colors.mediumGray,
    textDecoration: "none",
  },
  summary: {
    marginBottom: 16,
    fontSize: 10,
    color: colors.darkGray,
    lineHeight: 1.5,
  },
  mainContent: {
    flexDirection: "row",
    gap: 24,
  },
  leftColumn: {
    flex: 2,
  },
  rightColumn: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: colors.black,
    marginBottom: 10,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  experienceItem: {
    marginBottom: 14,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  companyName: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.black,
  },
  experienceLocation: {
    fontSize: 9,
    color: colors.lightGray,
    textAlign: "right",
  },
  jobTitle: {
    fontSize: 10,
    color: colors.teal,
    marginBottom: 6,
  },
  bulletList: {
    marginLeft: 0,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bullet: {
    width: 12,
    color: colors.teal,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: colors.darkGray,
    lineHeight: 1.4,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  skillTag: {
    fontSize: 8,
    backgroundColor: colors.skillBg,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 3,
    color: colors.darkGray,
  },
  educationTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.black,
    marginBottom: 2,
  },
  educationSchool: {
    fontSize: 9,
    color: colors.darkGray,
  },
  educationLocation: {
    fontSize: 9,
    color: colors.lightGray,
  },
  section: {
    marginBottom: 16,
  },
});

function ExperienceEntry({ company, location, date, title, bullets }) {
  return (
    <View style={styles.experienceItem}>
      <View style={styles.experienceHeader}>
        <Text style={styles.companyName}>{company}</Text>
        <View>
          {location && <Text style={styles.experienceLocation}>{location}</Text>}
          <Text style={styles.experienceLocation}>{date}</Text>
        </View>
      </View>
      <Text style={styles.jobTitle}>{title}</Text>
      <View style={styles.bulletList}>
        {bullets.map((bullet) => (
          <View key={bullet.slice(0, 30)} style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{bullet}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export function ResumePDF() {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.name}</Text>
          <Text style={styles.title}>{resumeData.title}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{resumeData.location}</Text>
            <Link src={resumeData.phoneHref} style={styles.contactLink}>
              {resumeData.phone}
            </Link>
            <Link src={`mailto:${resumeData.email}`} style={styles.contactLink}>
              {resumeData.email}
            </Link>
            <Link src={resumeData.websiteHref} style={styles.contactLink}>
              {resumeData.website}
            </Link>
          </View>
        </View>

        {/* Summary */}
        <Text style={styles.summary}>{resumeData.summary}</Text>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Left Column - Experience */}
          <View style={styles.leftColumn}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {resumeData.experience.map((exp) => (
              <ExperienceEntry key={exp.company} {...exp} />
            ))}
          </View>

          {/* Right Column - Skills & Education */}
          <View style={styles.rightColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skillsContainer}>
                {resumeData.skills.map((skill) => (
                  <Text key={skill} style={styles.skillTag}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <Text style={styles.educationTitle}>
                {resumeData.education.degree}
              </Text>
              <Text style={styles.educationSchool}>{resumeData.education.school}</Text>
              <Text style={styles.educationLocation}>{resumeData.education.location}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
