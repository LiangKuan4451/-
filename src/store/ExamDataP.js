import { defineStore } from "pinia";
const ExamDataP = defineStore(
    "radio", {
    state: () => {
        return {
            examData: [
                {
                    id: "1",
                    title: "1. 算法的设计目标包括（    ）和高效率与低存储量要求。",
                    answer: 2,
                    radio: [{ title: "A、正确性、有穷性、可使用性、可读性", value: 1 },
                    { title: "B、正确性、可使用性、可读性、健壮性", value: 2 },
                    { title: "C、有穷性、可使用性、可读性、健壮性", value: 3 },
                    { title: "D、正确性、有穷性、健壮性、可读性", value: 4 }]
                },
                {
                    id: "2",
                    title: "2. 算法具有五个重要特性，包括（    ）和输出性。",
                    answer: 3,
                    radio: [
                        { title: "A、有限性、确定性、可读性、输入性", value: 1 },
                        { title: "B、有限性、确定性、可读性、可行性", value: 2 },
                        { title: "C、有限性、确定性、可行性、输入性", value: 3 },
                        { title: "D、有限性、可行性、可读性、输入性", value: 4 },
                    ],
                },
                {
                    id: "3",
                    title: "3. 算法的渐进时间复杂度大Ο符号用来描述算法增长率的（    ）。",
                    answer: 2,
                    radio: [
                        { title: "A、下界", value: 1 },
                        { title: "B、上界", value: 2 },
                        { title: "C、同阶", value: 3 },
                        { title: "D、以上都不正确", value: 4 },
                    ],
                },
                {
                    id: "4",
                    title: "4. 算法的渐进时间复杂度大Ω符号用来描述算法增长率的（    ）。",
                    answer: 1,
                    radio: [
                        { title: "A、下界", value: 1 },
                        { title: "B、上界", value: 2 },
                        { title: "C、同阶", value: 3 },
                        { title: "D、以上都不正确", value: 4 },
                    ],
                },
                {
                    title: "5. 算法的渐进时间复杂度大Θ符号用来描述算法增长率的（    ）。",
                    answer: 3,
                    radio: [
                        { title: "A、下界", value: 1 },
                        { title: "B、上界", value: 2 },
                        { title: "C、同阶", value: 3 },
                        { title: "D、以上都不正确", value: 4 },
                    ],
                },
                {
                    title: "6. 在算法分析过程中，通常只考虑算法本身的效率，认为算法效率只依赖于（    ）。",
                    answer: 3,
                    radio: [
                        { title: "A、机器运行速度", value: 1 },
                        { title: "B、算法描述语言", value: 2 },
                        { title: "C、问题规模", value: 3 },
                        { title: "D、编译程序产生机器指令的质量", value: 4 },
                    ],
                },
                {
                    title: "7. 二分查找算法是利用（     ）实现的算法。",
                    answer: 1,
                    radio: [
                        { title: "A、分治策略", value: 1 },
                        { title: "B、动态规划法", value: 2 },
                        { title: "C、贪心法", value: 3 },
                        { title: "D、回溯法", value: 4 },
                    ],
                },
                {
                    title: "8. 快速排序算法是利用（     ）实现的算法。",
                    answer: 1,
                    radio: [
                        { title: "A、分治策略", value: 1 },
                        { title: "B、动态规划法", value: 2 },
                        { title: "C、贪心法", value: 3 },
                        { title: "D、回溯法", value: 4 },
                    ],
                },
                {
                    title: "9. 二路归并排序算法是利用（     ）实现的算法。",
                    answer: 1,
                    radio: [
                        { title: "A、分治法", value: 1 },
                        { title: "B、动态规划法", value: 2 },
                        { title: "C、贪心法", value: 3 },
                        { title: "D、回溯法", value: 4 },
                    ],
                },
                {
                    title: "10. 分治算法中，影响算法时间复杂度的关键的因素是（     ）算法的效率。",
                    answer: 1,
                    radio: [
                        { title: "A、合并问题解", value: 1 },
                        { title: "B、分解原问题", value: 2 },
                        { title: "C、求解子问题", value: 3 },
                        { title: "D、以上都不对", value: 4 },
                    ],
                },
                {
                    title: "11. 用回溯法求解货郎问题的解空间树是（     ）。",
                    answer: 2,
                    radio: [
                        { title: "A、子集树", value: 1 },
                        { title: "B、排列树", value: 2 },
                        { title: "C、深度优先生成树", value: 3 },
                        { title: "D、广度优先生成树", value: 4 },
                    ],
                },
                {
                    title: "12. 用回溯法求解0-1背包问题的解空间树是（     ）。",
                    answer: 1,
                    radio: [
                        { title: "A、子集树", value: 1 },
                        { title: "B、排列树", value: 2 },
                        { title: "C、深度优先生成树", value: 3 },
                        { title: "D、广度优先生成树", value: 4 },
                    ],
                },
                {
                    title: "13. 用回溯法搜索解空间树，通常采用（     ）避免无效搜索，提高算法效率。",
                    answer: 2,
                    radio: [
                        { title: "A、递归函数", value: 1 },
                        { title: "B、剪枝函数", value: 2 },
                        { title: "C、随机数函数", value: 3 },
                        { title: "D、搜索函数", value: 4 },
                    ],
                },
                {
                    title: "14. 下列算法中不能解决0/1背包问题的是（     ）。",
                    answer: 1,
                    radio: [
                        { title: "A、贪心法", value: 1 },
                        { title: "B、动态规划", value: 2 },
                        { title: "C、回溯法", value: 3 },
                        { title: "D、分支限界法", value: 4 },
                    ],
                },
                {
                    title: "15. （     ）性质是贪心算法与动态规划算法的共同点.",
                    answer: 4,
                    radio: [
                        { title: "A、重叠子问题", value: 1 },
                        { title: "B、构造最优解", value: 2 },
                        { title: "C、贪心选择", value: 3 },
                        { title: "D、最优子结构", value: 4 },
                    ],
                },
                {
                    title: "16. （     ）是贪心算法的基本要素之一。",
                    answer: 3,
                    radio: [
                        { title: "A、重叠子问题", value: 1 },
                        { title: "B、构造最优解", value: 2 },
                        { title: "C、贪心选择性质", value: 3 },
                        { title: "D、定义最优解", value: 4 },
                    ],
                },
                {
                    title:
                        "17. 用贪心法求解活动安排问题，算法的时间主要花费在排序上，时间复杂度为（     ）。",
                    answer: 2,
                    radio: [
                        { title: "A、O(n2n）", value: 1 },
                        { title: "B、O（nlogn）", value: 2 },
                        { title: "C、O（2n)", value: 3 },
                        { title: "D、O（n3）", value: 4 },
                    ],
                },
                {
                    title:
                        "18. 用贪心法求解流水线作业调度问题，算法时间主要花费在排序上，时间复杂度为（     ）。",
                    answer: 2,
                    radio: [
                        { title: "A、O(n2n）", value: 1 },
                        { title: "B、O（nlogn）", value: 2 },
                        { title: "C、O（2n)", value: 3 },
                        { title: "D、O（n3）", value: 4 },
                    ],
                },
                {
                    title: "19. 下列是动态规划算法基本要素的是（     ）。",
                    answer: 4,
                    radio: [
                        { title: "A、定义最优解", value: 1 },
                        { title: "B、构造最优解", value: 2 },
                        { title: "C、算出最优解", value: 3 },
                        { title: "D、重叠子问题", value: 4 },
                    ],
                },
                {
                    title: "20. 下列算法中通常以自底向下的方式求解最优解的是（     ）。",
                    answer: 2,
                    radio: [
                        { title: "A、分治法", value: 1 },
                        { title: "B、动态规划法", value: 2 },
                        { title: "C、贪心法", value: 3 },
                        { title: "D、回溯法", value: 4 },
                    ],
                },
                {
                    title: "21. 求解两个字符串的最长公共子序列采用的算法是（     ）。",
                    answer: 2,
                    radio: [
                        { title: "A、分治法", value: 1 },
                        { title: "B、动态规划法", value: 2 },
                        { title: "C、贪心法", value: 3 },
                        { title: "D、回溯法", value: 4 },
                    ],
                },
                {
                    title: "22. 如果一个问题具备（     ）性质，那么用动态规划法比用分治法更有优势。",
                    answer: 3,
                    radio: [
                        { title: "A、最优子结构", value: 1 },
                        { title: "B、无后效性", value: 2 },
                        { title: "C、重叠子问题", value: 3 },
                        { title: "D、贪心选择", value: 4 },
                    ],
                },
                { title: "1. 简要叙述回溯法求解问题的基本步骤。" },
                { title: "2. 简述分治法求解问题的基本步骤和分治法求解问题的基本特征。" },
                { title: "3. 说明贪心法求解问题的基本性质。" },
                { title: "4. 简述动态规划法求解问题的两个性质。" },
                { title: "5. 什么是解空间和解空间树？分别说明两种类型的解空间树。" },
                { title: "1.写动态规划法求解硬币找零问题的求解过程。" },
                { title: "2.写动态规划法求解最小编辑距离的求解过程。" },
                { title: "3.写用贪心法求解区间覆盖问题的求解过程。" },
                { title: "4.写用贪心法求解流水线作业问题的求解过程。" },
                { title: "5.写用分治法求解查找最小和次小元素的求解过程。" },
                { title: "6.写用分治法查找求第k大元素的求解过程。" },
            ]
        }
    }
}
)
export default ExamDataP;