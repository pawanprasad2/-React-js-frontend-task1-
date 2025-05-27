const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(TaskTable));

const { useState } = React;

function TaskTable() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Onboarding Call",
            status: "Pending",
            assignee: "pawan",
            notes: "",
        },
        {
            id: 2,
            name: "Google Search Console Access",
            status: "Pending",
            assignee: "Ayush",
            notes: "",
        },
        {
            id: 3,
            name: "Google Analytics Access",
            status: "Pending",
            assignee: "rohit",
            notes: "",
        },
        {
            id: 4,
            name: "Website Access",
            status: "Pending",
            assignee: "pawan",
            notes: "",
        },
        {
            id: 5,
            name: "Technical Audit",
            status: "Pending",
            assignee: "udit",
            notes: "",
        },
        {
            id: 6,
            name: "Anchor Text and Semantic Analysis",
            status: "Pending",
            assignee: "sufiyan",
            notes: "",
        },
        {
            id: 7,
            name: "Competitor Analysis",
            status: "Pending",
            assignee: "ayush",
            notes: "",
        },
        {
            id: 8,
            name: "Anchor Text / URL Mapping",
            status: "Pending",
            assignee: "pawan",
            notes: "",
        },
        {
            id: 9,
            name: "Google Data Studio Report + Local Reporting Suite",
            status: "Pending",
            assignee: "sufiyan",
            notes: "",
        },
        {
            id: 10,
            name: "Site Level Optimization",
            status: "Pending",
            assignee: "ayush",
            notes: "",
        },
        {
            id: 11,
            name: "On Page Optimization",
            status: "Pending",
            assignee: "Rohit",
            notes: "",
        },
        {
            id: 12,
            name: "Content Creation",
            status: "Pending",
            assignee: "Sufiyan",
            notes: "",
        },
        {
            id: 13,
            name: "Content Publishing",
            status: "Pending",
            assignee: "Pawan",
            notes: "",
        },
        {
            id: 14,
            name: "Premium Press Release",
            status: "Pending",
            assignee: "Udit",
            notes: "",
        },
        {
            id: 15,
            name: "Authority Niche Placements",
            status: "Pending",
            assignee: "Ayush",
            notes: "",
        },
        {
            id: 16,
            name: "Review Management",
            status: "Pending",
            assignee: "Rohit",
            notes: "",
        },
        {
            id: 17,
            name: "Index Links",
            status: "Pending",
            assignee: "pawan",
            notes: "",
        },
        {
            id: 18,
            name: "Video Recap",
            status: "Pending",
            assignee: "udit",
            notes: "",
        },
    ]);

    const [apiData, setApiData] = useState("");
    const [apiStatus, setApiStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (id, field, value) => {
        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, [field]: value } : task))
        );
    };

    const prepareApiData = () => {
        const payload = {
            month: 1,
            tasks: tasks,
            totalTasks: tasks.length,
            timestamp: new Date().toISOString(),
        };
        setApiData(JSON.stringify(payload, null, 2));
        setApiStatus("");
    };

    const postToApi = async () => {
        setIsLoading(true);
        setApiStatus("");

        const payload = {
            month: 1,
            tasks: tasks,
            totalTasks: tasks.length,
            timestamp: new Date().toISOString(),
        };

        try {
            //API endpoint
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (response.ok) {
                const result = await response.json();
                setApiStatus(
                    "✅ Data successfully posted to API! Response ID: " + result.id
                );
                console.log("API Response:", result);
            } else {
                throw new Error("API request failed with status: " + response.status);
            }
        } catch (error) {
            setApiStatus("❌ Error posting to API: " + error.message);
            console.error("API Error:", error);
        }

        setIsLoading(false);
    };

    return React.createElement(
        "div",
        { className: "container" },
        React.createElement("div", { className: "month-header" }, "MONTH 1"),
        React.createElement(
            "table",
            null,
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement("th", null, "Task Name"),
                    React.createElement("th", null, "Status"),
                    React.createElement("th", null, "Assignee"),
                    React.createElement("th", null, "Notes")
                )
            ),
            React.createElement(
                "tbody",
                null,
                tasks.map((task) =>
                    React.createElement(
                        "tr",
                        { key: task.id },
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", {
                                type: "text",
                                value: task.name,
                                onChange: (e) => handleChange(task.id, "name", e.target.value),
                            })
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "select",
                                {
                                    value: task.status,
                                    onChange: (e) =>
                                        handleChange(task.id, "status", e.target.value),
                                },
                                React.createElement("option", { value: "Pending" }, "Pending"),
                                React.createElement(
                                    "option",
                                    { value: "In Progress" },
                                    "In Progress"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "Completed" },
                                    "Completed"
                                )
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", {
                                type: "text",
                                value: task.assignee,
                                onChange: (e) =>
                                    handleChange(task.id, "assignee", e.target.value),
                            })
                        ),
                        React.createElement(
                            "td",
                            null,
                            React.createElement("input", {
                                type: "text",
                                value: task.notes,
                                onChange: (e) => handleChange(task.id, "notes", e.target.value),
                            })
                        )
                    )
                )
            )
        ),
        React.createElement(
            "button",
            {
                className: "export-btn",
                onClick: prepareApiData,
            },
            "Prepare Data for API"
        ),
        React.createElement(
            "button",
            {
                className: "post-btn",
                onClick: postToApi,
                disabled: isLoading,
            },
            isLoading ? "Posting..." : "POST to API"
        ),
        apiStatus &&
        React.createElement(
            "div",
            {
                className:
                    "api-status " +
                    (apiStatus.includes("✅")
                        ? "api-success"
                        : apiStatus.includes("❌")
                            ? "api-error"
                            : "api-loading"),
            },
            apiStatus
        ),
        apiData && React.createElement("div", { className: "json-output" }, apiData)
    );
}
