let availableJobs = [
    {
        "jobName": "StartupXYZ",
        "jobSkill": "Full Stack Engineer",
        "jobPlace": "Remote",
        "jobType": "Full-time",
        "jobSalary": "$120,000 - $160,000",
        "jobApplied": false,
        "jobDescription": "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        "jobRejected": false
    },
    {
        "jobName": "TechCorp Industries",
        "jobSkill": "Senior Frontend Developer",
        "jobPlace": "San Francisco, CA",
        "jobType": "Full-time",
        "jobSalary": "$130,000 - $175,000",
        "jobApplied": false,
        "jobDescription": "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        "jobRejected": false
    },
    {
        "jobName": "CloudFirst Inc",
        "jobSkill": "Backend Developer",
        "jobPlace": "Seattle, WA",
        "jobType": "Full-time",
        "jobSalary": "$140,000 - $190,000",
        "jobApplied": false,
        "jobDescription": "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        "jobRejected": false
    },
    {
        "jobName": "Innovation Labs",
        "jobSkill": "UI/UX Engineer",
        "jobPlace": "Austin, TX",
        "jobType": "Full-time",
        "jobSalary": "$110,000 - $150,000",
        "jobApplied": false,
        "jobDescription": "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        "jobRejected": false
    },
    {
        "jobName": "MegaCorp Solutions",
        "jobSkill": "JavaScript Developer",
        "jobPlace": "New York, NY",
        "jobType": "Full-time",
        "jobSalary": "$130,000 - $170,000",
        "jobApplied": false,
        "jobDescription": "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        "jobRejected": false
    },
    {
        "jobName": "Mobile First Corp",
        "jobSkill": "React Native Developer",
        "jobPlace": "Remote",
        "jobType": "Full-time",
        "jobSalary": "$130,000 - $175,000",
        "jobApplied": false,
        "jobDescription": "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        "jobRejected": false
    },
    {
        "jobName": "WebFlow Agency",
        "jobSkill": "Web Designer & Developer",
        "jobPlace": "Los Angeles, CA",
        "jobType": "Part-time",
        "jobSalary": "$80,000 - $120,000",
        "jobApplied": false,
        "jobDescription": "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        "jobRejected": false
    },
    {
        "jobName": "DataViz Solutions",
        "jobSkill": "Data Visualization Specialist",
        "jobPlace": "Boston, MA",
        "jobType": "Full-time",
        "jobSalary": "$125,000 - $165,000",
        "jobApplied": false,
        "jobDescription": "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        "jobRejected": false
    }
]
let interviewJobs = [];
let rejectedJobs = [];

const jobsAvailableContainer = document.getElementById("jobs-available-container");
const jobsInterviewContainer = document.getElementById("jobs-interview-container");
const jobsRejectedContainer = document.getElementById("jobs-rejected-container");

const totalJobsCountTag = document.getElementById("totalJobsCountTag");
const interviewJobsTag = document.getElementById("interviewJobsTag");
const rejectedJobsTag = document.getElementById("rejectedJobsTag");
const totalJobsCountSmallTag = document.getElementById("totalJobsCountSmallTag");

const allFilterBtn = document.getElementById('allFilterBtn')
const interviewFilterBtn = document.getElementById('interviewFilterBtn')
const rejectedFilterBtn = document.getElementById('rejectedFilterBtn')

const domLoad = () => {
    jobsAvailableContainer.style.display = "block";
    jobsRejectedContainer.style.display = "none";
    jobsInterviewContainer.style.display = "none";

    jobsInterviewContainer.innerHTML = `<section class="min-h-[400px] bg-base-100 rounded-lg flex justify-center items-center flex-col" id="interview-no-jobs-found-container">
            <img src="./Assests/jobs.png" alt="jobs-base">
            <h2 class="text-2xl theme-balck font-bold">No jobs available</h2>
            <p class="text-lg theme-gray">Check back soon for new job opportunities</p>
        </section>`
    jobsRejectedContainer.innerHTML = `<section class="min-h-[400px] bg-base-100 rounded-lg flex justify-center items-center flex-col" id="rejected-no-jobs-found-container">
            <img src="./Assests/jobs.png" alt="jobs-base">
            <h2 class="text-2xl theme-balck font-bold">No jobs available</h2>
            <p class="text-lg theme-gray">Check back soon for new job opportunities</p>
        </section>`
}
domLoad()

const loadAvailableJobs = () => {
    if (availableJobs.length > 0) {
        jobsAvailableContainer.innerHTML = "";

        for (let i = 0; i < availableJobs.length; i++) {
            const job = availableJobs[i];
            let jobStatus = "";
            let jobStatusStyle = "";

            if (job.jobApplied || job.jobApplied === "JOB APPLIED") {
                jobStatus = "JOB APPLIED"
                jobStatusStyle = "bg-primary theme-white"
            }

            else if (job.jobRejected || job.jobApplied === "REJECTED") {
                jobStatus = "REJECTED"
                jobStatusStyle = "bg-error theme-white"
            }

            else {
                jobStatus = "NOT APPLIED"
                jobStatusStyle = "bg-blue-100/70"
            }

            jobsAvailableContainer.innerHTML += ` <div class="job p-6 bg-base-100 rounded-lg border-2 border-gray-200 relative">
                    <h3 class="text-xl font-bold theme-black jobName">${job.jobName}</h3>
                    <p class="text-lg theme-gray jobSkill">${job.jobSkill}</p>
                    <p class="text-[16px] theme-gray my-5 jobFacts">${job.jobType} ⋅ ${job.jobPlace} ⋅ ${job.jobSalary}</p>
                    <p class="badge ${jobStatusStyle} p-5 text-lg theme-black font-semibold jobApplied">${jobStatus}</p>
                    <p class="text-[16px] theme-gray mt-3 mb-5 jobDescription">${job.jobDescription}</p>
                    <div class="space-x-2 space-y-2">
                        <button class="btn btn-outline btn-success text-lg job-btn interviewBtn">
                            INTERVIEW
                        </button>
                        <button class="btn btn-outline btn-error text-lg job-btn rejectBtn">
                            REJECTED
                        </button>
                    </div>
                    <button class="btn btn-error theme-white px-2 py-1 absolute right-3 top-3 deleteJob" id="deleteJob">
                        <img src="./Assets/delete.png" alt="deleteBtn" >
                    </button>
                </div>`
        }
    }
    else {
        jobsAvailableContainer.innerHTML = `<section class="min-h-[400px] bg-base-100 rounded-lg flex justify-center items-center flex-col">
            <img src="./Assests/jobs.png" alt="jobs-base">
            <h2 class="text-2xl theme-balck font-bold">No jobs available</h2>
            <p class="text-lg theme-gray">Check back soon for new job opportunities</p>
        </section>`
    }
}

loadAvailableJobs()

const justLoadUi = tab => {
    if (tab === "interviewTab") {

        if (interviewJobs.length === 0) {
            jobsInterviewContainer.innerHTML = `<section class="min-h-[400px] bg-base-100 rounded-lg flex justify-center items-center flex-col" id="interview-no-jobs-found-container">
            <img src="./Assests/jobs.png" alt="jobs-base">
            <h2 class="text-2xl theme-balck font-bold">No jobs available</h2>
            <p class="text-lg theme-gray">Check back soon for new job opportunities</p>
            </section>`;
            document.getElementById("interview-no-jobs-found-container").style.display = "flex";
        }

        else {
            jobsInterviewContainer.innerHTML = "";

            for (let i = 0; i < interviewJobs.length; i++) {
                const job = interviewJobs[i];
                jobsInterviewContainer.innerHTML += ` <div class="job p-6 bg-base-100 rounded-lg border-2 border-gray-200 relative">
                    <h3 class="text-xl font-bold theme-black jobName">${job.jobName}</h3>
                    <p class="text-lg theme-gray jobSkill">${job.jobSkill}</p>
                    <p class="text-[16px] theme-gray my-5 jobFacts">${job.jobFacts}</p>
                    <p class="badge bg-primary p-5 text-lg theme-white font-semibold jobApplied">JOB APPLIED</p>
                    <p class="text-[16px] theme-gray mt-3 mb-5 jobDescription">${job.jobDescription}</p>
                    <div class="space-x-2 space-y-2">
                        <button class="btn btn-outline btn-success text-lg job-btn interviewBtn">
                            INTERVIEW
                        </button>
                        <button class="btn btn-outline btn-error text-lg job-btn rejectBtn">
                            REJECTED
                        </button>
                    </div>
                    <button class="btn btn-error theme-white px-2 py-1 absolute right-3 top-3 deleteJob" id="deleteJob">
                        <img src="./Assets/delete.png" alt="deleteBtn" >
                    </button>
                </div>`
            }
        }
        totalJobsCountSmallTag.innerText = `${interviewJobs.length} of ${availableJobs.length} jobs`;
        return;
    }

    else if (tab === "rejectedTab") {
        if (rejectedJobs.length === 0) {
            jobsRejectedContainer.innerHTML = `<section class="min-h-[400px] bg-base-100 rounded-lg flex justify-center items-center flex-col" id="rejected-no-jobs-found-container">
            <img src="./Assests/jobs.png" alt="jobs-base">
            <h2 class="text-2xl theme-balck font-bold">No jobs available</h2>
            <p class="text-lg theme-gray">Check back soon for new job opportunities</p>
            </section>`;
            document.getElementById("rejected-no-jobs-found-container").style.display = "flex";
        }

        else {
            jobsRejectedContainer.innerHTML = "";

            for (let i = 0; i < rejectedJobs.length; i++) {
                const job = rejectedJobs[i];
                jobsRejectedContainer.innerHTML += ` <div class="job p-6 bg-base-100 rounded-lg border-2 border-gray-200 relative">
                    <h3 class="text-xl font-bold theme-black jobName">${job.jobName}</h3>
                    <p class="text-lg theme-gray jobSkill">${job.jobSkill}</p>
                    <p class="text-[16px] theme-gray my-5 jobFacts">${job.jobFacts}</p>
                    <p class="badge bg-error p-5 text-lg theme-white font-semibold jobApplied">REJECTED</p>
                    <p class="text-[16px] theme-gray mt-3 mb-5 jobDescription">${job.jobDescription}</p>
                    <div class="space-x-2 space-y-2">
                        <button class="btn btn-outline btn-success text-lg job-btn interviewBtn">
                            INTERVIEW
                        </button>
                        <button class="btn btn-outline btn-error text-lg job-btn rejectBtn">
                            REJECTED
                        </button>
                    </div>
                    <button class="btn btn-error theme-white px-2 py-1 absolute right-3 top-3 deleteJob" id="deleteJob">
                        <img src="./Assets/delete.png" alt="deleteBtn" >
                    </button>
                </div>`
            }
        }
        totalJobsCountSmallTag.innerText = `${rejectedJobs.length} of ${availableJobs.length} jobs`;
        return;
    }
    else if (tab === "All") {
        totalJobsCountSmallTag.innerText = `${availableJobs.length} jobs`;
        return;
    }
}

const countJobs = () => {
    totalJobsCountTag.innerText = availableJobs.length;

    totalJobsCountSmallTag.innerText = `${availableJobs.length} jobs`;

    interviewJobsTag.innerText = interviewJobs.length;
    rejectedJobsTag.innerText = rejectedJobs.length;
}

countJobs();

const toggleFilterBtn = id => {
    allFilterBtn.classList.remove('theme-gray', 'bg-base-100', 'theme-white', 'bg-primary');
    interviewFilterBtn.classList.remove('theme-gray', 'bg-base-100', 'theme-white', 'bg-primary');
    rejectedFilterBtn.classList.remove('theme-gray', 'bg-base-100', 'theme-white', 'bg-primary');

    allFilterBtn.classList.add('theme-gray', 'bg-base-200');
    interviewFilterBtn.classList.add('theme-gray', 'bg-base-200');
    rejectedFilterBtn.classList.add('theme-gray', 'bg-base-200');

    const thisBtn = document.getElementById(id);
    thisBtn.classList.add('theme-white', 'bg-primary');

    if (thisBtn.innerText === 'All') {
        jobsAvailableContainer.style.display = "block";
        jobsRejectedContainer.style.display = "none";
        jobsInterviewContainer.style.display = "none";
        justLoadUi("All");
    }

    else if (thisBtn.innerText === 'Interview') {
        jobsAvailableContainer.style.display = "none";
        jobsRejectedContainer.style.display = "none";
        jobsInterviewContainer.style.display = "block";
        justLoadUi("interviewTab");
    }

    else if (thisBtn.innerText === 'Rejected') {
        jobsAvailableContainer.style.display = "none";
        jobsInterviewContainer.style.display = "none";
        jobsRejectedContainer.style.display = "block";
        justLoadUi("rejectedTab");
    };
};

document.getElementById("job-master-container").addEventListener("click", function (event) {
    const target = event.target;
    if (event.target.classList.contains('interviewBtn') === true) {
        const jobCard = target.parentNode.parentNode;

        let newJob = {
            jobName: jobCard.querySelector('.jobName').innerText,
            jobSkill: jobCard.querySelector('.jobSkill').innerText,
            jobFacts: jobCard.querySelector('.jobFacts').innerText,
            jobApplied: "JOB APPLIED",
            jobDescription: jobCard.querySelector('.jobDescription').innerText
        };

        let similarFound = false;
        for (let i = 0; i < interviewJobs.length; i++) {
            const job = interviewJobs[i];
            if (job.jobName === newJob.jobName) {
                similarFound = true;
                break;
            };
        };

        if (!similarFound) {
            interviewJobs.push(newJob)
            for (let i = 0; i < availableJobs.length; i++) {
                const job = availableJobs[i];
                if (job.jobName === newJob.jobName) {
                    job.jobApplied = true;
                    job.jobRejected = false;
                    break;
                };
            };

            for (let i = 0; i < rejectedJobs.length; i++) {
                const job = rejectedJobs[i];
                if (job.jobName === newJob.jobName) {
                    rejectedJobs.splice(i, 1);
                    break;
                };
            };

            jobCard.classList.contains("hidden") ?
                jobCard.classList.remove("hidden")
                : jobCard.classList.add("hidden");
            loadAvailableJobs();
            countJobs();
        }
    }

    if (event.target.classList.contains('rejectBtn') === true) {
        const jobCard = target.parentNode.parentNode;

        let newJob = {
            jobName: jobCard.querySelector('.jobName').innerText,
            jobSkill: jobCard.querySelector('.jobSkill').innerText,
            jobFacts: jobCard.querySelector('.jobFacts').innerText,
            jobApplied: "REJECTED",
            jobDescription: jobCard.querySelector('.jobDescription').innerText
        };
        let similarFound = false;
        for (let i = 0; i < rejectedJobs.length; i++) {
            const job = rejectedJobs[i];
            if (job.jobName === newJob.jobName) {
                similarFound = true;
                break;
            };
        };
        if (!similarFound) {
            rejectedJobs.push(newJob);


            for (let i = 0; i < availableJobs.length; i++) {
                const job = availableJobs[i];
                if (job.jobName === newJob.jobName) {
                    job.jobApplied = false;
                    job.jobRejected = true;
                };
            };

            for (let i = 0; i < interviewJobs.length; i++) {
                const job = interviewJobs[i];
                if (job.jobName === newJob.jobName) {
                    interviewJobs.splice(i, 1);
                };
            };

            jobCard.classList.contains("hidden") ?
                jobCard.classList.remove("hidden")
                : jobCard.classList.add("hidden");

            loadAvailableJobs();
            countJobs();
        }
    }
    if (event.target.classList.contains('deleteJob') === true) {
        const jobCard = target.parentNode;

        let newJob = {
            jobName: jobCard.querySelector('.jobName').innerText
        };

        for (let i = 0; i < availableJobs.length; i++) {
            const job = availableJobs[i];
            if (job.jobName === newJob.jobName) {
                availableJobs.splice(i, 1);
                break;
            }
        };
        
        for (let i = 0; i < interviewJobs.length; i++) {
            const job = interviewJobs[i];
            if (job.jobName === newJob.jobName) {
                interviewJobs.splice(i, 1);
                justLoadUi("interviewTab")
                break;
            }
        };
        
        for (let i = 0; i < rejectedJobs.length; i++) {
            const job = rejectedJobs[i];
            if (job.jobName === newJob.jobName) {
                rejectedJobs.splice(i, 1);
                justLoadUi("rejectedTab")
                break;
            }
        };
        loadAvailableJobs();
        countJobs();
    };
});