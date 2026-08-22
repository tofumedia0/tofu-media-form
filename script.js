document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const welcomeScreen = document.getElementById("welcomeScreen");
    const applicationScreen = document.getElementById("applicationScreen");
    const successScreen = document.getElementById("successScreen");

    const startBtn = document.getElementById("startBtn");
    const backBtn = document.getElementById("backBtn");

    const form = document.getElementById("applicationForm");

    const steps = document.querySelectorAll(".step");

    const progressBar = document.getElementById("progressBar");
    const stepText = document.getElementById("stepText");
    const percentText = document.getElementById("percentText");

    const languageBtn = document.getElementById("languageBtn");
    const languageBtn2 = document.getElementById("languageBtn2");

    const departmentCards = document.querySelectorAll(".department");
    const departmentInput = document.getElementById("department");
    const departmentNext = document.getElementById("departmentNext");

    const questionsContainer =
        document.getElementById("questionsContainer");


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentStep = 1;
    let currentLanguage = "en";
    let selectedDepartment = "";

    const TOTAL_STEPS = 5;


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        en: {

            season: "TOFU MEDIA — SEASON 2",

            welcomeTitle:
                `Let's make<br><span>opportunities happen.</span>`,

            welcomeText:
                "Help us connect young people with scholarships, free courses, competitions, events and opportunities.",

            start:
                "Start Application",

            hint:
                "It only takes a few minutes.",

            getToKnow:
                "GET TO KNOW YOU",

            nameTitle:
                "What's your name? 👋",

            nameDescription:
                "Tell us your full name.",

            fullName:
                "Your full name",

            aboutYou:
                "ABOUT YOU",

            aboutTitle:
                "Tell us about yourself 🎓",

            aboutDescription:
                "These details help us understand our applicants better.",

            age:
                "Age",

            governorate:
                "Governorate",

            email:
                "Email",

            whatsapp:
                "WhatsApp Number",

            chooseDepartment:
                "CHOOSE YOUR DEPARTMENT",

            departmentTitle:
                "Where do you see yourself? 🎯",

            departmentDescription:
                "Choose the field that best matches your skills and interests.",

            research:
                "Research",

            researchSmall:
                "Find useful opportunities",

            content:
                "Content",

            contentSmall:
                "Turn opportunities into content",

            marketing:
                "Marketing",

            marketingSmall:
                "Reach the right audience",

            design:
                "Design",

            designSmall:
                "Make ideas visual",

            community:
                "Community",

            communitySmall:
                "Build a helpful community",

            pr:
                "PR & Partnerships",

            prSmall:
                "Build meaningful connections",

            hr:
                "HR",

            hrSmall:
                "Build and support the team",

            miniChallenge:
                "MINI CHALLENGE",

            challengeDescription:
                "There is no perfect answer. We just want to see how you approach problems.",

            lastStep:
                "LAST STEP",

            lastTitle:
                "Tell us about you 💜",

            lastDescription:
                "Be honest. We care more about your mindset than having the perfect answer.",

            whyTofu:
                "Why do you want to join TOFU Media?",

            contribution:
                "What can you add to TOFU Media?",

            hours:
                "How much time can you commit weekly?",

            choose:
                "Choose",

            continue:
                "Continue",

            submit:
                "Submit Application",

            successTitle:
                `Application<br><span>received! 🎉</span>`,

            successText:
                "Thank you for applying to TOFU Media. Our team will review your application and contact you soon.",

            nextTitle:
                "What happens next?",

            nextText:
                "Keep an eye on your email and WhatsApp. Our team may contact you during the selection process."
        },


        ar: {

            season:
                "TOFU MEDIA — السيزون الثاني",

            welcomeTitle:
                `خلينا نخلي<br><span>الفرص توصل لمستحقيها.</span>`,

            welcomeText:
                "ساعدنا نوصل الشباب بالمنح والكورسات المجانية والمسابقات والإيفنتات والفرص المختلفة.",

            start:
                "ابدئي التقديم",

            hint:
                "التقديم مش هياخد غير كام دقيقة.",

            getToKnow:
                "خلينا نتعرف عليك",

            nameTitle:
                "اسمك إيه؟ 👋",

            nameDescription:
                "اكتبي اسمك بالكامل.",

            fullName:
                "الاسم بالكامل",

            aboutYou:
                "عن نفسك",

            aboutTitle:
                "قوليلنا شوية عن نفسك 🎓",

            aboutDescription:
                "المعلومات دي بتساعدنا نفهم المتقدمين بشكل أفضل.",

            age:
                "السن",

            governorate:
                "المحافظة",

            email:
                "الإيميل",

            whatsapp:
                "رقم الواتساب",

            chooseDepartment:
                "اختاري التيم",

            departmentTitle:
                "شايفة نفسك فين؟ 🎯",

            departmentDescription:
                "اختاري المجال الأقرب لمهاراتك واهتماماتك.",

            research:
                "Research",

            researchSmall:
                "البحث عن الفرص المفيدة",

            content:
                "Content",

            contentSmall:
                "تحويل الفرص لمحتوى",

            marketing:
                "Marketing",

            marketingSmall:
                "الوصول للجمهور المناسب",

            design:
                "Graphic Design",

            designSmall:
                "تحويل الأفكار لتصميمات",

            community:
                "Community",

            communitySmall:
                "بناء مجتمع مفيد",

            pr:
                "PR & Partnerships",

            prSmall:
                "بناء العلاقات والشراكات",

            hr:
                "HR",

            hrSmall:
                "دعم وبناء التيم",

            miniChallenge:
                "تحدي بسيط",

            challengeDescription:
                "مفيش إجابة مثالية. إحنا بس عايزين نشوف طريقة تفكيرك وتعاملَك مع المواقف.",

            lastStep:
                "آخر خطوة",

            lastTitle:
                "قوليلنا أكتر عنك 💜",

            lastDescription:
                "خليكي صريحة. إحنا مهتمين بطريقة تفكيرك أكتر من إن إجابتك تكون مثالية.",

            whyTofu:
                "ليه عايزة تنضمي لـ TOFU Media؟",

            contribution:
                "إيه اللي تقدري تضيفيه لـ TOFU Media؟",

            hours:
                "تقدري تلتزمي بكام ساعة أسبوعيًا؟",

            choose:
                "اختاري",

            continue:
                "كملي",

            submit:
                "إرسال التقديم",

            successTitle:
                `تم استلام<br><span>التقديم! 🎉</span>`,

            successText:
                "شكرًا لتقديمك في TOFU Media. التيم هيقوم بمراجعة التقديم والتواصل معاكي قريبًا.",

            nextTitle:
                "إيه اللي هيحصل بعد كده؟",

            nextText:
                "تابعي الإيميل والواتساب بتوعك، ممكن التيم يتواصل معاكي أثناء مرحلة الاختيار."
        }
    };


    /* =====================================================
       DEPARTMENT QUESTIONS
    ===================================================== */

    const questions = {

        "Research & Opportunities": {

            en: [
                "You found a scholarship online. What would you check before sharing it?",
                "Where would you search for reliable opportunities?",
                "How would you explain complicated requirements to students?",
                "What information should every opportunity post include?"
            ],

            ar: [
                "لقيتي منحة أونلاين، إيه اللي هتتأكدي منه قبل ما تنشريها؟",
                "هتدوري فين على فرص موثوقة؟",
                "هتشرحي شروط فرصة معقدة للطلاب إزاي؟",
                "إيه المعلومات اللي لازم تكون موجودة في أي بوست عن فرصة؟"
            ]
        },


        "Content Writing": {

            en: [
                "Write a short hook that would make a student stop scrolling.",
                "How would you explain a complicated scholarship simply?",
                "What makes social media content interesting and useful?",
                "What information would you include in a post about a free course?"
            ],

            ar: [
                "اكتبي Hook يخلي الطالب يوقف الـ scrolling.",
                "هتشرحي منحة معقدة بطريقة بسيطة إزاي؟",
                "إيه اللي بيخلي محتوى السوشيال interesting ومفيد؟",
                "إيه المعلومات اللي هتحطيها في بوست عن كورس مجاني؟"
            ]
        },


        "Marketing": {

            en: [
                "Give us 3 ideas to promote a fully funded opportunity to students.",
                "How would you promote TOFU in a Facebook group without looking like spam?",
                "Which is more important: reaching many people or the right people?",
                "Give us one creative marketing idea for TOFU."
            ],

            ar: [
                "ادينا 3 أفكار تروجي بيها لفرصة ممولة بالكامل للطلاب.",
                "هتعملي Marketing لـ TOFU في جروب فيسبوك من غير Spam إزاي؟",
                "إيه الأهم: عدد كبير من الناس ولا الناس الصح؟",
                "ادينا فكرة Marketing Creative لـ TOFU."
            ]
        },


        "Graphic Design": {

            en: [
                "What design tools do you use?",
                "What information should stand out in a scholarship design?",
                "What makes a social media design professional?",
                "Do you have a portfolio or previous work?"
            ],

            ar: [
                "إيه أدوات التصميم اللي بتستخدميها؟",
                "إيه المعلومات اللي لازم تبان بوضوح في تصميم منحة؟",
                "إيه اللي بيخلي تصميم السوشيال Professional؟",
                "عندك Portfolio أو شغل سابق؟"
            ]
        },


        "Community": {

            en: [
                "A student asks a question and you don't know the answer. What would you do?",
                "How would you make students comfortable asking questions?",
                "What activities could keep the community active?",
                "How would you handle someone repeatedly breaking the rules?"
            ],

            ar: [
                "طالب سأل سؤال وإنتِ مش عارفة الإجابة، هتعملي إيه؟",
                "إزاي تخلي الطلاب مرتاحين في السؤال؟",
                "إيه الأنشطة اللي ممكن تخلي الـ Community Active؟",
                "هتتعاملي إزاي مع حد بيكرر مخالفة القواعد؟"
            ]
        },


        "PR & Partnerships": {

            en: [
                "How would you approach an organization for a collaboration?",
                "Write a short message introducing TOFU Media.",
                "What makes an organization interested in a partnership?",
                "How would you maintain a good relationship with a partner?"
            ],

            ar: [
                "هتتواصلي مع Organization عشان Collaboration إزاي؟",
                "اكتبي Message قصيرة تعرفي فيها TOFU Media.",
                "إيه اللي يخلي Organization تهتم بـ Partnership؟",
                "إزاي تحافظي على علاقة كويسة مع Partner؟"
            ]
        },


        "HR": {

            en: [
                "A volunteer suddenly stops responding. What would you do?",
                "A team member repeatedly misses deadlines. What would you do?",
                "What qualities should a good volunteer have?",
                "How would you welcome a new volunteer?"
            ],

            ar: [
                "Volunteer فجأة بطل يرد، هتعملي إيه؟",
                "Team Member بيكرر التأخير عن الـ Deadline، هتعملي إيه؟",
                "إيه صفات الـ Volunteer الكويس؟",
                "إزاي ترحبي بـ Volunteer جديد؟"
            ]
        }
    };


    /* =====================================================
       CHANGE LANGUAGE
    ===================================================== */

    function changeLanguage(lang) {

        currentLanguage = lang;

        document.documentElement.lang = lang;

        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";


        document.querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key = element.dataset.i18n;

                if (
                    translations[lang] &&
                    translations[lang][key]
                ) {

                    element.innerHTML =
                        translations[lang][key];
                }
            });


        document.querySelectorAll("[data-placeholder]")
            .forEach(element => {

                const key = element.dataset.placeholder;

                if (
                    translations[lang] &&
                    translations[lang][key]
                ) {

                    element.placeholder =
                        translations[lang][key];
                }
            });


        const buttonText =
            lang === "en"
                ? "العربية"
                : "English";


        if (languageBtn) {
            languageBtn.textContent = buttonText;
        }

        if (languageBtn2) {
            languageBtn2.textContent = buttonText;
        }


        renderQuestions();

        updateProgress();
    }


    /* =====================================================
       LANGUAGE BUTTONS
    ===================================================== */

    if (languageBtn) {

        languageBtn.addEventListener("click", function () {

            changeLanguage(
                currentLanguage === "en"
                    ? "ar"
                    : "en"
            );

        });
    }


    if (languageBtn2) {

        languageBtn2.addEventListener("click", function () {

            changeLanguage(
                currentLanguage === "en"
                    ? "ar"
                    : "en"
            );

        });
    }


    /* =====================================================
       START APPLICATION
    ===================================================== */

    if (startBtn) {

        startBtn.addEventListener("click", function () {

            if (welcomeScreen) {
                welcomeScreen.classList.remove("active");
            }

            if (applicationScreen) {
                applicationScreen.classList.add("active");
            }

            currentStep = 1;

            showStep(1);
            updateProgress();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    /* =====================================================
       SHOW STEP
    ===================================================== */

    function showStep(number) {

        steps.forEach(step => {
            step.classList.remove("active");
        });


        const target =
            document.querySelector(
                `.step[data-step="${number}"]`
            );


        if (target) {
            target.classList.add("active");
        }
    }


    /* =====================================================
       PROGRESS
    ===================================================== */

    function updateProgress() {

        const percentage =
            ((currentStep - 1) /
            (TOTAL_STEPS - 1)) * 100;


        if (progressBar) {

            progressBar.style.width =
                percentage + "%";
        }


        if (percentText) {

            percentText.textContent =
                Math.round(percentage) + "%";
        }


        if (stepText) {

            stepText.textContent =
                currentLanguage === "ar"
                    ? `الخطوة ${currentStep} من ${TOTAL_STEPS}`
                    : `Step ${currentStep} of ${TOTAL_STEPS}`;
        }
    }


    /* =====================================================
       VALIDATE STEP
    ===================================================== */

    function validateStep(step) {

        if (!step) {
            return false;
        }


        const fields =
            step.querySelectorAll(
                "input[required], textarea[required], select[required]"
            );


        for (const field of fields) {

            if (!field.checkValidity()) {

                field.reportValidity();

                return false;
            }
        }


        return true;
    }


    /* =====================================================
       NEXT BUTTONS
    ===================================================== */

    document.querySelectorAll(".next-btn")
        .forEach(button => {

            button.addEventListener("click", function () {

                const current =
                    document.querySelector(
                        `.step[data-step="${currentStep}"]`
                    );


                if (!validateStep(current)) {
                    return;
                }


                if (
                    currentStep === 3 &&
                    !selectedDepartment
                ) {

                    alert(
                        currentLanguage === "ar"
                            ? "من فضلك اختاري التيم الأول."
                            : "Please choose a department first."
                    );

                    return;
                }


                if (currentStep < TOTAL_STEPS) {

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


    /* =====================================================
       BACK BUTTON
    ===================================================== */

    if (backBtn) {

        backBtn.addEventListener("click", function () {

            if (currentStep > 1) {

                currentStep--;

                showStep(currentStep);

                updateProgress();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            } else {

                if (applicationScreen) {
                    applicationScreen.classList.remove("active");
                }

                if (welcomeScreen) {
                    welcomeScreen.classList.add("active");
                }
            }
        });
    }


    /* =====================================================
       DEPARTMENT SELECTION
    ===================================================== */

    departmentCards.forEach(card => {

        card.addEventListener("click", function () {

            departmentCards.forEach(item => {
                item.classList.remove("selected");
            });


            card.classList.add("selected");


            selectedDepartment =
                card.dataset.department;


            if (departmentInput) {

                departmentInput.value =
                    selectedDepartment;
            }


            if (departmentNext) {

                departmentNext.disabled = false;
            }


            renderQuestions();
        });
    });


    /* =====================================================
       RENDER QUESTIONS
    ===================================================== */

    function renderQuestions() {

        if (!questionsContainer) {
            return;
        }


        if (!selectedDepartment) {
            return;
        }


        const departmentQuestions =
            questions[selectedDepartment];


        if (!departmentQuestions) {
            return;
        }


        const currentQuestions =
            departmentQuestions[currentLanguage];


        questionsContainer.innerHTML = "";


        currentQuestions.forEach(function (question, index) {

            const wrapper =
                document.createElement("div");

            wrapper.className = "question";


            const label =
                document.createElement("label");

            label.className =
                "question-title";


            label.innerHTML = `
                <span class="question-number">
                    ${index + 1}
                </span>
                ${question}
            `;


            const textarea =
                document.createElement("textarea");

            textarea.required = true;

            textarea.name =
                `challenge_${index + 1}`;

            textarea.dataset.question =
                question;

            textarea.placeholder =
                currentLanguage === "ar"
                    ? "اكتبي إجابتك هنا..."
                    : "Write your answer here...";


            wrapper.appendChild(label);

            wrapper.appendChild(textarea);

            questionsContainer.appendChild(wrapper);

        });
    }


    /* =====================================================
       NORMALIZE EGYPTIAN PHONE
    ===================================================== */

    function normalizeEgyptianPhone(value) {

        let phone =
            value.trim();


        phone =
            phone.replace(
                /[\s\-()]/g,
                ""
            );


        /* +201012345678 */

        if (phone.startsWith("+20")) {

            phone =
                "0" +
                phone.substring(3);
        }


        /* 201012345678 */

        else if (
            phone.startsWith("20") &&
            phone.length === 12
        ) {

            phone =
                "0" +
                phone.substring(2);
        }


        /*
           Egyptian mobile numbers:
           010
           011
           012
           015
        */

        const egyptianPhoneRegex =
            /^01[0125][0-9]{8}$/;


        if (
            !egyptianPhoneRegex.test(phone)
        ) {

            return null;
        }


        return phone;
    }


    /* =====================================================
       FORM SUBMIT
    ===================================================== */

    if (form) {

        form.addEventListener("submit", async function (event) {

            event.preventDefault();


            /* =========================
               VALIDATE FINAL STEP
            ========================= */

            const lastStep =
                document.querySelector(
                    `.step[data-step="${TOTAL_STEPS}"]`
                );


            if (!validateStep(lastStep)) {
                return;
            }


            /* =========================
               CHECK DEPARTMENT
            ========================= */

            if (!selectedDepartment) {

                alert(
                    currentLanguage === "ar"
                        ? "من فضلك اختاري التيم."
                        : "Please choose a department."
                );

                return;
            }


            /* =========================
               PHONE
            ========================= */

            const phoneInput =
                document.getElementById("phone");


            const phone =
                normalizeEgyptianPhone(
                    phoneInput.value
                );


            if (!phone) {

                alert(
                    currentLanguage === "ar"
                        ? "من فضلك اكتبي رقم موبايل مصري صحيح، مثال: 01012345678"
                        : "Please enter a valid Egyptian phone number, e.g. 01012345678"
                );


                phoneInput.focus();

                return;
            }


            /* =========================
               SUBMIT BUTTON
            ========================= */

            const submitButton =
                form.querySelector(
                    ".submit-btn"
                );


            if (submitButton) {

                submitButton.disabled = true;

                submitButton.innerHTML =
                    currentLanguage === "ar"
                        ? "جاري إرسال التقديم... ⏳"
                        : "Sending application... ⏳";
            }


            /* =================================================
               FORM DATA
            ================================================= */

            const formData =
                new FormData();


            /* =================================================
               WEB3FORMS
            ================================================= */

            formData.append(
                "access_key",
                "4579e504-4006-4d59-99fb-ff7ff12f1fc1"
            );


            formData.append(
                "subject",
                `TOFU Media — New ${selectedDepartment} Application`
            );


            /* =================================================
               APPLICANT INFORMATION
            ================================================= */

            formData.append(
                "Full Name",
                document
                    .getElementById("name")
                    .value
                    .trim()
            );


            formData.append(
                "Age",
                document
                    .getElementById("age")
                    .value
                    .trim()
            );


            formData.append(
                "Governorate",
                document
                    .getElementById("governorate")
                    .value
                    .trim()
            );


            formData.append(
                "Email",
                document
                    .getElementById("email")
                    .value
                    .trim()
            );


            formData.append(
                "WhatsApp",
                phone
            );


            formData.append(
                "Department",
                selectedDepartment
            );


            /* =================================================
               MINI CHALLENGE
            ================================================= */

            const answerInputs =
                questionsContainer
                    ? questionsContainer
                        .querySelectorAll("textarea")
                    : [];


            const departmentQuestions =
                questions[selectedDepartment];


            if (departmentQuestions) {

                const displayedQuestions =
                    departmentQuestions[
                        currentLanguage
                    ];


                answerInputs.forEach(
                    function (input, index) {

                        const questionText =
                            input.dataset.question ||
                            displayedQuestions[index];


                        const answerText =
                            input.value.trim();


                        formData.append(
                            `Question ${index + 1}`,
                            questionText
                        );


                        formData.append(
                            `Answer ${index + 1}`,
                            answerText
                        );

                    }
                );
            }


            /* =================================================
               FINAL QUESTIONS
            ================================================= */

            formData.append(
                "Why do you want to join TOFU?",
                document
                    .getElementById("whyTofu")
                    .value
                    .trim()
            );


            formData.append(
                "What can you add to TOFU?",
                document
                    .getElementById("contribution")
                    .value
                    .trim()
            );


            formData.append(
                "Weekly Commitment",
                document
                    .getElementById("hours")
                    .value
            );


            /* =================================================
               EXTRA INFORMATION
            ================================================= */

            formData.append(
                "Application Language",
                currentLanguage === "ar"
                    ? "Arabic"
                    : "English"
            );


            /* =================================================
               SEND TO WEB3FORMS
            ================================================= */

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


                console.log(
                    "TOFU APPLICATION:",
                    data
                );


                if (data.success) {

                    /* =========================
                       SUCCESS
                    ========================= */

                    if (applicationScreen) {

                        applicationScreen.classList.remove(
                            "active"
                        );
                    }


                    if (successScreen) {

                        successScreen.classList.add(
                            "active"
                        );
                    }


                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });


                } else {

                    throw new Error(
                        data.message ||
                        "Submission failed"
                    );
                }


            } catch (error) {

                console.error(
                    "Submission Error:",
                    error
                );


                alert(
                    currentLanguage === "ar"
                        ? "حصل خطأ أثناء إرسال التقديم. اتأكدي من الإنترنت وجربي تاني."
                        : "Something went wrong while submitting. Please try again."
                );


                if (submitButton) {

                    submitButton.disabled = false;

                    submitButton.innerHTML =
                        currentLanguage === "ar"
                            ? "إرسال التقديم 🚀"
                            : "Submit Application 🚀";
                }
            }

        });
    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    changeLanguage("en");

    showStep(1);

    updateProgress();

});
