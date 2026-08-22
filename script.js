```javascript
// ==========================================
// TOFU MEDIA - VOLUNTEER APPLICATION
// Web3Forms Connected Version
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ELEMENTS
    // ==========================================

    const welcomeScreen = document.getElementById("welcomeScreen");
    const applicationScreen = document.getElementById("applicationScreen");
    const successScreen = document.getElementById("successScreen");

    const startBtn = document.getElementById("startBtn");
    const backBtn = document.getElementById("backBtn");

    const form = document.getElementById("applicationForm");

    const steps = document.querySelectorAll(".step");

    const progressBar = document.getElementById("progressBar");
    const stepText = document.getElementById("stepText");
    const progressPercent = document.getElementById("progressPercent");

    const departmentCards =
        document.querySelectorAll(".department-card");

    const departmentInput =
        document.getElementById("department");

    const departmentNext =
        document.getElementById("departmentNext");

    const dynamicQuestions =
        document.getElementById("dynamicQuestions");

    const challengeTitle =
        document.getElementById("challengeTitle");


    // ==========================================
    // SETTINGS
    // ==========================================

    const WEB3FORMS_ACCESS_KEY =
        "4579e504-4006-4d59-99fb-ff7ff12f1fc1";

    const totalSteps = 5;

    let currentStep = 1;

    let selectedDepartment = "";


    // ==========================================
    // DEPARTMENT QUESTIONS
    // ==========================================

    const departmentQuestions = {

        "Research & Opportunities": [

            "You found a scholarship online. What would you check before sharing it with TOFU students?",

            "Where would you search for reliable scholarships, free courses, competitions and youth opportunities?",

            "Imagine the opportunity has complicated requirements. How would you make the information easier for students to understand?",

            "What are the most important details that should be included in an opportunity post?"

        ],


        "Content Writing": [

            "Write a short hook that would make a student stop scrolling when they see a post about a free opportunity.",

            "How would you explain a complicated scholarship to a student in a simple way?",

            "What makes social media content interesting and useful at the same time?",

            "Imagine you have to write a post about a free course. What information would you include?"

        ],


        "Marketing": [

            "TOFU found a fully funded opportunity for high school students. Give us 3 ideas to reach the students who need it.",

            "How would you promote TOFU inside a Facebook group without making your post look like spam?",

            "Which is more important for an opportunity campaign: reaching a huge number of people or reaching the right people? Explain why.",

            "Give us one creative marketing idea that could make more young people know about TOFU."

        ],


        "Graphic Design": [

            "What design tools do you use?",

            "Imagine you have to design a post about a scholarship. What information would you make visually stand out?",

            "What makes a social media design look professional?",

            "Send us a link to your portfolio or previous work if you have one."

        ],


        "Community": [

            "A student asks about an opportunity and you don't know the answer. What would you do?",

            "How would you make students feel comfortable asking questions inside the TOFU community?",

            "What type of content or activities could make students stay active in the community?",

            "How would you deal with someone who repeatedly breaks the community rules?"

        ],


        "PR & Partnerships": [

            "Imagine you want to contact an organization and propose a collaboration with TOFU. How would you approach them?",

            "Write a short message introducing TOFU Media to another youth organization.",

            "What do you think makes an organization interested in partnering with another organization?",

            "How would you maintain a good relationship with a partner after finishing a collaboration?"

        ],


        "HR": [

            "A volunteer suddenly stops responding to the team. What would you do first?",

            "A team member repeatedly misses deadlines. How would you handle the situation?",

            "What qualities do you think a good volunteer should have?",

            "How would you make a new volunteer feel welcomed inside the TOFU team?"

        ]

    };


    // ==========================================
    // START
    // ==========================================

    startBtn.addEventListener("click", () => {

        welcomeScreen.classList.remove("active");

        applicationScreen.classList.add("active");

        currentStep = 1;

        updateProgress();

        setTimeout(() => {

            document.getElementById("name").focus();

        }, 300);

    });


    // ==========================================
    // NEXT BUTTONS
    // ==========================================

    const nextButtons =
        document.querySelectorAll(".next-btn");


    nextButtons.forEach(button => {

        button.addEventListener("click", () => {

            const currentStepElement =
                document.querySelector(
                    `.step[data-step="${currentStep}"]`
                );


            if (!validateStep(currentStepElement)) {
                return;
            }


            if (currentStep < totalSteps) {

                currentStep++;

                showStep(currentStep);

                updateProgress();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        });

    });


    // ==========================================
    // SHOW STEP
    // ==========================================

    function showStep(stepNumber) {

        steps.forEach(step => {

            step.classList.remove("active-step");

        });


        const selectedStep =
            document.querySelector(
                `.step[data-step="${stepNumber}"]`
            );


        if (selectedStep) {

            selectedStep.classList.add("active-step");

        }

    }


    // ==========================================
    // PROGRESS
    // ==========================================

    function updateProgress() {

        const percentage =
            (currentStep / totalSteps) * 100;


        progressBar.style.width =
            `${percentage}%`;


        stepText.textContent =
            `Step ${currentStep} of ${totalSteps}`;


        progressPercent.textContent =
            `${Math.round(percentage)}%`;

    }


    // ==========================================
    // BACK BUTTON
    // ==========================================

    backBtn.addEventListener("click", () => {

        if (currentStep > 1) {

            currentStep--;

            showStep(currentStep);

            updateProgress();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        } else {

            applicationScreen.classList.remove("active");

            welcomeScreen.classList.add("active");

        }

    });


    // ==========================================
    // DEPARTMENT SELECTION
    // ==========================================

    departmentCards.forEach(card => {

        card.addEventListener("click", () => {

            departmentCards.forEach(item => {

                item.classList.remove("selected");

            });


            card.classList.add("selected");


            selectedDepartment =
                card.dataset.department;


            departmentInput.value =
                selectedDepartment;


            departmentNext.disabled = false;


            generateQuestions(selectedDepartment);

        });

    });


    // ==========================================
    // GENERATE QUESTIONS
    // ==========================================

    function generateQuestions(department) {

        dynamicQuestions.innerHTML = "";


        const questions =
            departmentQuestions[department];


        if (!questions) {
            return;
        }


        challengeTitle.textContent =
            `${department} Challenge 🧠`;


        questions.forEach((question, index) => {

            const wrapper =
                document.createElement("div");

            wrapper.classList.add(
                "dynamic-question"
            );


            const label =
                document.createElement("label");


            label.innerHTML = `
                <span class="question-number">
                    ${index + 1}
                </span>

                ${question}
            `;


            const textarea =
                document.createElement("textarea");


            textarea.name =
                `department_question_${index + 1}`;


            textarea.required = true;


            textarea.placeholder =
                "Write your answer here...";


            wrapper.appendChild(label);

            wrapper.appendChild(textarea);

            dynamicQuestions.appendChild(wrapper);

        });

    }


    // ==========================================
    // VALIDATION
    // ==========================================

    function validateStep(stepElement) {

        const fields =
            stepElement.querySelectorAll(
                "input, textarea, select"
            );


        for (const field of fields) {

            if (!field.checkValidity()) {

                field.reportValidity();

                field.focus();

                return false;

            }

        }


        return true;

    }


    // ==========================================
    // PHONE VALIDATION
    // ==========================================

    function validatePhone(phone) {

        // Egyptian mobile numbers
        const phoneRegex =
            /^01[0125][0-9]{8}$/;

        return phoneRegex.test(phone);

    }


    // ==========================================
    // FORM SUBMISSION
    // ==========================================

    form.addEventListener("submit", async (e) => {

        e.preventDefault();


        // --------------------------------------
        // Validate final step
        // --------------------------------------

        const lastStep =
            document.querySelector(
                `.step[data-step="${totalSteps}"]`
            );


        if (!validateStep(lastStep)) {
            return;
        }


        // --------------------------------------
        // Validate phone
        // --------------------------------------

        const phone =
            document.getElementById("phone")
                .value
                .trim();


        if (!validatePhone(phone)) {

            alert(
                "برجاء إدخال رقم هاتف مصري صحيح مكون من 11 رقم."
            );

            document.getElementById("phone").focus();

            return;

        }


        // --------------------------------------
        // Get submit button
        // --------------------------------------

        const submitBtn =
            form.querySelector(".submit-btn");


        const originalText =
            submitBtn.innerText;


        submitBtn.disabled = true;

        submitBtn.innerText =
            "Sending Application...";


        // --------------------------------------
        // Prepare data
        // --------------------------------------

        const formData =
            new FormData(form);


        // Web3Forms Access Key

        formData.append(
            "access_key",
            WEB3FORMS_ACCESS_KEY
        );


        // Email subject

        formData.append(
            "subject",
            `New TOFU Media Application - ${selectedDepartment}`
        );


        // From name

        formData.append(
            "from_name",
            "TOFU Media Application"
        );


        // --------------------------------------
        // Send to Web3Forms
        // --------------------------------------

        try {

            const response =
                await fetch(
                    "https://api.web3forms.com/submit",
                    {
                        method: "POST",
                        body: formData
                    }
                );


            const data =
                await response.json();


            // ----------------------------------
            // SUCCESS
            // ----------------------------------

            if (data.success) {

                applicationScreen.classList.remove(
                    "active"
                );


                successScreen.classList.add(
                    "active"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                form.reset();

            }


            // ----------------------------------
            // ERROR
            // ----------------------------------

            else {

                alert(
                    "حدث خطأ أثناء الإرسال:\n" +
                    (data.message || "Unknown error")
                );


                submitBtn.disabled = false;

                submitBtn.innerText =
                    originalText;

            }

        }


        // --------------------------------------
        // NETWORK ERROR
        // --------------------------------------

        catch (error) {

            console.error(error);


            alert(
                "تعذر الاتصال بالخدمة. تأكدي من اتصال الإنترنت وحاولي مرة أخرى."
            );


            submitBtn.disabled = false;

            submitBtn.innerText =
                originalText;

        }

    });


    // ==========================================
    // ENTER KEY
    // ==========================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" &&
                event.target.tagName !== "TEXTAREA"
            ) {

                const activeStep =
                    document.querySelector(
                        ".active-step"
                    );


                const nextButton =
                    activeStep?.querySelector(
                        ".next-btn"
                    );


                if (
                    nextButton &&
                    !nextButton.disabled
                ) {

                    event.preventDefault();

                    nextButton.click();

                }

            }

        }
    );


    // ==========================================
    // INITIAL STATE
    // ==========================================

    updateProgress();

});
```

