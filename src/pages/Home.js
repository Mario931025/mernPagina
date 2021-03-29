import React from 'react'
import MainBanner from '../components/Web/MainBanner'
import HomeCourses from '../components/Web/HomeCourses'
import HowCoursesWorks from '../components/Web/HowCoursesWorks'
import HowMMyCourseWorks from '../components/Web/HowCoursesWorks'
import ReviewCourses  from '../components/Web/ReviewCourses'


function Home() {
    return (
        <>
        <MainBanner/>
        <HomeCourses/>
        <HowMMyCourseWorks/>
        <ReviewCourses/>
        </>
    )
}

export default Home
