import styles from "./CSS/Course.module.css";
import CourseBox from "./CourseBox";
import Slider from "./Slider";
function Courses() {
  const courseData = [
    {
      title: "IOS & AND",
      subTitle: "The Complete Flutter Course With Projects 2024",
      image: "src/Ezitech-imags/flutter.jpg",
      time: "3 Months",
      price: "PKR 37,000",
    },
    {
      title: "Designing",
      subTitle: "Adobe Illustrator Course With Projects",
      image: "src/Ezitech-imags/AI.webp",
      time: "3 Months",
      price: "PKR 35,000",
    },
    {
      title: "Amazon",
      subTitle: "Online Arbitrage Mastermind 2.0 [Resell Products from home]",
      image: "src/Ezitech-imags/amazon.webp",
      time: "3 Months",
      price: "PKR 34,000",
      oldPrice: "PKR 48,000",
    },
    {
      title: "AI",
      subTitle: "Learn Machine Learing Using Python [Advanced Concepts]",
      image: "src/Ezitech-imags/machine-learning-course-1.webp",
      time: "4 Months",
      price: "PKR 38,000",
      oldPrice: "PKR 50,000",
    },
    {
      title: "Development",
      subTitle: "Web Development Using Modern Trending Frameworks",
      image: "src/Ezitech-imags/react_logo.webp",
      time: "65 days",
      price: "PKR 40,000",
    },
    {
      title: "Graphics",
      subTitle: "Adobe PhotoShop Course",
      image: "src/Ezitech-imags/photoshop-course.webp",
      time: "90 days",
      price: "PKR 30,000",
      oldPrice: "PKR 42,000",
    },
  ];

  const courseSlides = [
    <CourseBox data={courseData[0]} key={0} />,
    <CourseBox data={courseData[1]} key={1} />,
    <CourseBox data={courseData[2]} key={2} />,
    <CourseBox data={courseData[3]} key={3} />,
    <CourseBox data={courseData[4]} key={4} />,
    <CourseBox data={courseData[5]} key={5} />,
  ];

  return (
    <div className={styles.courseBox}>
      <h2>Recommended Courses!</h2>
      <Slider slides={courseSlides} />
    </div>
  );
}

export default Courses;
