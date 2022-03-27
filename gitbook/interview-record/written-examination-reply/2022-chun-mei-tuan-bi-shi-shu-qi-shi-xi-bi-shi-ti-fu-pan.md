# 2022春美团笔试暑期实习笔试题复盘

1、幸运数 （AC 100%） 2、乘积为正（AC 100%） 3、做饭（输出2可骗27%） 4、炸弹 （AC45%） 5、黑白树涂色（AC 100%）

今天的美团笔试结束了，上牛客一看，嚯，好家伙人均4题，这么简单咩。（我好菜哦）

## 1、幸运数 （AC 100%）

小美现在相信一些数字能给他带来好运。 这些数字至少满足以下两个特征中的一种：

1. 数字是11的整数倍。
2. 数字中至少包含两个1。

小美现在给你若干数字，希望你回答这个数字是不是幸运数。

例如：132是11的12倍，满足条件1，101有两个1，满足条件2。

> 输入描述 第一行一个数字n，表示小美有n组询问 接下来每一行一个正整数表示小美询问的数字。 数据保证1 <= n <= 500, 每个询问的数字在 \[1, 1e9]范围内

> 输出描述 对于每组询问，如果是幸运数，输出yes，不是，输出no。

> 样例输入 6 22 101 1234 555 10001 132

> 样例输出 yes yes no no yes yes

### 思路&代码

AC很快啊，签到题，暴力就行了，范围也不大

```cpp
#include <iostream>
#include <string>
using namespace std;
int n;
int a[505];
bool judge(int x) {
    if(x % 11 == 0) return true;
    else {
        string s = to_string(x);
        int len = s.length();
        int cnt = 0;
        for(int i = 0; i < len; ++i) {
            if(s[i] == '1') ++cnt;
            if(cnt == 2) return true;
        }
    }

    return false;
}
int main() {
    cin >> n;
    for(int i = 0; i < n; ++i) {
        cin >> a[i];
        cout << (judge(a[i])?"yes":"no") << endl;
    }
    return 0;
}
```

## 2、乘积为正（AC 100%）

小美现在有一个序列，序列中仅包含1和-1两种数字。

小美现在想要知道，有多少个连续的子序列，序列中的数字乘积为正。

> 输入描述 第一行一个正整数n，表示小美手中的序列长度。 第二行n个空格隔开的数字，每个数字只能是1和-1中的一种。 对于80%的数据保证1 <= n <= 500 对于剩余20%的数据保证1 <= n <= 5000

> 输出描述 一行一个正整数表示有多少连续的子序列满足题目要求。

> **样例输入** 4 1 1 -1 -1 **样例输出** 6 **提示** 共有6个连续子序列满足要求。 \[1], \[1], \[1, 1], \[-1, -1], \[1, -1, -1], \[1, 1, -1, -1]

### 思路&代码

我是一眼用dp过的（AC 100% dp\[i]\[j] 代表i\~j子序列乘积是否为正，A掉了（

```cpp
#include <iostream>
#include <string>
using namespace std;
typedef long long ll;
const int maxn = 5005;
int n;
ll a[maxn], ans;
ll dp[maxn][maxn];
int main() {
    cin >> n;
    for(int i = 0; i < n; ++i) {
        cin >> a[i];
        if(a[i] == -1) dp[i][i] = -1;
        else dp[i][i] = 1;
    }
    for(int k = 2; k <= n; ++k) {
        for(int i = 0; i+k-1 < n; ++i) {
            int j = i+k-1;
            if(a[j] == -1) dp[i][j] = -dp[i][j-1];
            else dp[i][j] = dp[i][j-1];
        }
    }
    for(int i = 0; i < n; ++i) {
        for(int j = 0; j < n; ++j) {
            if(dp[i][j] == 1) ++ans;
        }
    }
    cout << ans << endl;
    return 0;
}
```

## 3、做饭（输出2可骗27%）

小美现在在厨房做饭。小美发现食材现在只够每种菜做一份。

现在同一时刻（即不分先后顺序）来了n个顾客。每个顾客都有想两份要点的菜。只有当顾客吃到全部自己想要的菜的时候，顾客才会满意。

现在你的任务是，合理地接取顾客的订单要求，尽可能让更多的顾客满意，并输出最多有多少顾客可以满意。

> **输入描述** 第一行两个正整数n, m n表明有多少顾客前来点菜，m表示小美现在能做的菜的编号范围在\[1, m]。 接下来n行，每行两个数字，表明一名顾客的所点的两道菜的编号。 其中80%的数据保证2 <= n <= 10, 2 <= m <= 20 另外20%的数据保证2 <= n <= 20, 2 <= m <= 40 **输出描述** 一行一个正整数表示最多有多少顾客可以满意。

> **样例输入** 3 4 1 2 2 3 3 4 **样例输出** 2 样例解释 显然此时最佳方案是满足第一个和第三个顾客。

不会做——考后看了看别人的题解说是状压dp

## 4、炸弹 （AC45%）

小美现在打音游。这个音游的玩法是这样的：

—— 共有n个房间。小美初始拥有一个指针，指在一号房间。

—— 游戏共持续m秒，每秒会有一个房间产生炸弹，小美的指针不能在这个房间中。

—— 每秒结束的瞬间，小美可以使用一次魔法，把指针切换到另一个房间中，该过程会消耗一个能量。

你的任务是计算小美无伤通过音游所需要消耗的最小能量。

保证第一秒的炸弹不发生在一号房间中。

> **输入描述** 第一行两个正整数 n 和 m，表示房间有 n 个，游戏持续 m 秒。 第二行 m 个正整数，每个正整数在1\~n 的范围内，第 i 个正整数表示第 i 秒时炸弹在哪个房间生成。 数字间有空格隔开 数据保证 n ＜= 10 , 1 <= m <= 10000 **输出描述** 一行一个正整数，表示小美无伤通过音游所需要消耗的最少能量。

> **样例输入** 2 4 2 1 1 2 **样例输出** 2

### 思路及代码

我的思路是贪心，能呆着不动就不动弹，实在等到要被轰炸了转移就往后面被最少轰炸的房间转移，若某个房间没有被轰炸或者最后轰炸时间是当前时间之前就转到这个房间，结束，可能复杂度高了也可能边界问题没处理好一直过不去。 一些能跑过的测试用例，如有问题欢迎评论指出

```cpp
Input:
4 1
1
Output:
1
```

```cpp
Input:
7 8
2 1 4 5 3 6 1 7
Output:
2
```

```cpp
Input:
10 11
1 2 3 4 5 6 7 8 9 10 10
Output:
2
```

```cpp
Input:
10 14
3 10 3 4 5 6 7 8 9 1 9 8 1 2
Output:
1
```

代码如下：

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
typedef long long ll;
const int maxn = 10005;
int n, m, ans, nowp;
int a[maxn];
int main() {
    ios::sync_with_stdio(false); cin.tie(0); cout.tie(0);
    cin >> n >> m;
    map<int, int> map;
    for(int i = 0; i < m; ++i) {
        cin >> a[i];
        map[a[i]] = i;
    }
    bool flag = false;
    nowp = 1;
    for(int i = 0; i < m; ++i) {
        if(nowp != a[i]) continue;  // 不被轰炸 不用换
        int maxp = 0;
        for(int j = 1; j <= n; ++j) {
            if(j == a[i]) continue;
            if(map.find(j) == map.end() || map[j] < i-1) {// 轰炸已经过去了
                flag = true;
                nowp = map[j];
                ++ans;
                break;
            } else if(map[j] > maxp) {    // 轰炸最远的
                maxp = map[j];
            }
        }
        if(flag) break;
        nowp = a[maxp];
        ++ans;
    }
    cout << ans << endl;
    return 0;
}
```

## 5、黑白树涂色（AC 100%）

现在给你一颗树，每个树上的节点会被涂成黑色或白色。

现在定义好节点：

* 对于白色的节点：若该节点没有子节点，或该节点子节点中至少有一个为黑色节点，则该节点是好节点
* 对于黑色的节点：若该节点没有子节点，或该节点的所有子节点均为白色节点，则该节点是好节点

你的任务是找出这棵树上黑色的好节点和白色的好节点各有几个。

**输入描述** 第一行一个正整数n，表示这棵树共有n个节点，编号1到n。

第二行n个空格隔开的正整数，代表每个节点的颜色。0是白色，1是黑色。

接下来n个空格隔开的正整数，第 i 个正整数v表示节点 i 的父节点是v。其中，数字0表示这个节点是根。

1 <= n <= 10000

**输出描述** 一行两个正整数，以空格分开，第一个正整数表示白色的好节点有几个，第二个正整数表示黑色的好节点有几个。

**样例输入** 6 1 0 1 1 0 0 0 1 2 1 4 4 **样例输出** 3 2

### 思路&代码

这题说的很玄乎，其实很简单就是建个树罢了，甚至不需要左右指针（只需要统计左右节点数（只包括了下边一层的子节点，如果更深的话就难了）

```cpp
#include <iostream>
#include <string>
using namespace std;
typedef long long ll;
const int Null = -1;
const int maxn = 10010;
int n, pa;
struct Node {
    int val;
    int Bnum, Wnum;
    Node():val(Null), Bnum(0), Wnum(0) {}
} a[maxn];
int main() {
    cin >> n;
    for(int i = 1; i <= n; ++i) {
        cin >> a[i].val;
    }
    int root;
    for(int i = 1; i <= n; ++i) {
        cin >> pa;
        if(pa == 0) root = i;
        else if(a[i].val == 1) {    // 黑色
            a[pa].Bnum++;
        } else a[pa].Wnum++;
    }
    int ansB, ansW;
    ansB = ansW = 0;
    for(int i = 1; i <= n; ++i) {
        if(a[i].val == 1) { // 黑节点
            if(a[i].Bnum == 0) ++ansB;
        } else if((a[i].Bnum == 0 && a[i].Wnum == 0) || a[i].Bnum > 0) ++ansW;
    }
    cout << ansW << ' ' << ansB << endl;
    return 0;
}
```
