document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("theme-selector").addEventListener("change", changeTheme);
});

const diseaseDatabase = {
    "Common Cold": ["fever", "cough", "fatigue"],
    "Flu": ["fever", "cough", "headache", "fatigue"],
    "Migraine": ["headache", "nausea", "fatigue"],
    "COVID-19": ["fever", "cough", "shortness of breath", "fatigue"],
    "Food Poisoning": ["nausea", "fatigue"],
};

function checkSymptoms() {
    let selectedSymptoms = Array.from(document.getElementById("symptoms").selectedOptions).map(option => option.value);
    let possibleDiseases = [];

    for (const [disease, symptoms] of Object.entries(diseaseDatabase)) {
        if (selectedSymptoms.every(symptom => symptoms.includes(symptom))) {
            possibleDiseases.push(disease);
        }
    }

    let result = document.getElementById("result");
    if (possibleDiseases.length > 0) {
        result.innerHTML = `<strong>Possible conditions:</strong> ${possibleDiseases.join(", ")}`;
    } else {
        result.innerHTML = "No matching condition found. Please consult a doctor.";
    }
}

function changeTheme() {
    let theme = document.getElementById("theme-selector").value;
    document.body.className = theme;
}
