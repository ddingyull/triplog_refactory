export default function DatePicker() {

    return (
        <>
        <div class="day_select">
        <a href="#">1주일</a>
        <a href="#">1개월</a>
        <a href="#">3개월</a>
        <input type="text" id="date-picker" class="form-control bg-white border-0 small" aria-label="Search" aria-describedby="basic-addon2" th:value="|${year}-${month}|" placeholder="2022-09-26" />
        <input type="text" id="date-picker" class="form-control bg-white border-0 small" aria-label="Search" aria-describedby="basic-addon2" th:value="|${year}-${month}|" placeholder="2022-09-26" />
        </div>
        </>
    )
}