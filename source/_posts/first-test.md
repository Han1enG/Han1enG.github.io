---
title: first test
date: 2023-01-01 09:48:07
tags:
  - algorithm
categories: C++
katex: true
---

## 质数

1. 质数和合数是针对所有大于 $1$ 的「自然数」来定义的（所有小于等于 $1$ 的数都不是质数）。

2. 所有小于等于 $1$ 的整数既不是质数也不是合数。

3. 质数的判定——试除法：

    $d | n$ 代表的含义是 $d$ 能整除 $n$。（这里的 `|` 代表整除）

    一个合数的约数总是成对出现的，如果 $d|n$，那么 $(n/d)|n$，因此我们判断一个数是否为质数的时候，只需要判断较小的那一个数能否整除 $n$ 就行了，即只需枚举 $d\le(n\div d)$，即 $d\times d\le n$，$d\le \sqrt{n}$ 就行了。

    `sqrt(n)` 这个函数执行的时候**比较慢**。

    $i * i <= n$ 又容易**溢出**。

    ```cpp
    bool is_prime(int x)
    {
        if(x < 2) return false;
        for(int i = 2; i <= x / i; i ++) // x / i 是最快且最不容易爆炸的写法
        {
            if(x % i == 0) return false;
        }
        return true;
    }
    ```

4. 分解质因数——试除法（算数基本定理）

    算数基本定理：任何一个大于 $1$ 的自然数 $n$，如果 $n$ 不为质数，那么 $n$ 可以唯一分解成有限个质数的乘积 $n=P_1^{a1}P^{a2}_2P^{a3}_3\dots P^{an}_n$，这里 $P_1<P_2<P_3<\dots <P_n$ 均为质数，其中指数 $ai$ 是正整数。

    特别要注意——分解质因数与质因数不一样，分解质因数是一个过程，而质因数是一个数。

    **一个合数分解而成的质因数最多只包含一个大于 $\sqrt{n}$ 的质因数。**（反证法，若 $n$ 可以被分解成两个大于 $\sqrt{n}$ 的质因数，则这两个质因数相乘的结果大于 $n$，与事实矛盾）

    当枚举到某一个数 $i$ 的时候，$n$ 的因子里面已经不包含 $[2,i−1]$ 里面的数（已经被除干净了），如果 $n | i$，则 $i$ 的因子里面也已经不包含 $[2,i−1]$ 里面的数，因此每次枚举的数都是质数。

    质因子（质因数）在数论里是指能整除给定正整数的质数。根据算术基本定理，不考虑排列顺序的情况下，每个正整数都能够以唯一的方式表示成它的质因数的乘积。

    两个没有共同质因子的正整数称为互质。因为 $1$ 没有质因子，$1$ 与任何正整数（包括 $1$ 本身）都是互质。

    只有一个质因子的正整数为质数。

    ```cpp
    void divide(int x)
    {
        for(int i = 2; i <= x / i; i ++)
        {
            if(x % i == 0)
            {
                int s = 0;
                while(x % i == 0) x /= i, s ++ ;
                cout << i << ' ' << s << endl;
            }
        }
        if (x > 1) cout << x << ' ' << 1 << endl; // 大于sqrt(n)的数
        cout << endl;
    }
    ```

5. 筛质数（朴素筛法）

    步骤：把 $[2,n−1]$ 中的所有的数的倍数都标记上，最后没有被标记的数就是质数。

    原理：假定有一个数 $p$ 未被 $[2,p−1]$ 中的数标记过，那么说明，不存在 $[2,p−1]$ 中的任何一个数的倍数是 $p$，也就是说 $[2,p−1]$ 中不存在 $p$ 的约数，因此，根据质数的定义可知：$p$ 是质数。

    调和级数：当 $n$ 趋近于正无穷的时候，$\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\frac{1}{5}+\dots+\frac{1}{n}=\ln n+c$（$c$ 是欧拉常数，约等于 $0.577$ 左右）

    时间复杂度：约为 $O(n\log n)$（注：此处的 $\log$ 特指以 $2$ 为底）

    ```c++
    int primes[N], cnt; // primes[] 存储所有素数
    bool st[N];         // st[x] 存储 x 是否被筛掉
    
    void get_primes(int n)  
    {
        for(int i=2; i<=n; i++)
        {
            if(!st[i]) primes[cnt ++ ] = i;
            for(int j = i + i; j <= n; j += i) st[j] = true; // 筛掉 i 的倍数
        }
    }
    ```

6. 埃氏筛（稍加优化版的筛法）

    质数定理：$1\sim n$ 中有 $n/ln\ n$个质数。

    步骤：在朴素筛法的过程中只用质数项去筛。原理其实很简单，所有的合数都可以用质因数的乘积来表示，所以我们只需要筛掉质数的倍数，合数自然也就被筛掉了。

    时间复杂度：$O(n\log(\log n))$。

    ```cpp
    int primes[N], cnt; // primes[] 存储所有素数
    bool st[N]; // st[x] 存储 x 是否被筛掉
    
    void get_primes(int n)
    {
        for(int i = 2; i <= n; i ++)
        {
            if(!st[i]) // 没有被筛掉，也就是质数，把质数的倍数筛掉，而不去考虑合数的倍数
            {
    			primes[cnt ++] = i;
            	for(int j = i + i; j <= n; j += i) st[j] = true; 
            }
        }
    }
    ```

7. 线性筛

    若 $n\approx10^6$，线性筛和埃氏筛的时间效率差不多，若 $n\approx10^7$，线性筛会比埃氏筛快了大概一倍。

    埃氏筛法尽管利用了质数的倍数一定不是质数来构造筛子，但还是有重复计算，如 $30$ 不是质数，在 $i = 2$时候，$2 * 15$ 被筛掉了一次，在 $i = 5$ 时候，$5 * 6$又被筛掉了一次，造成效率的浪费。

    我们在枚举倍数时，保证当前质数不能整除这个倍数就好了，当然了，在之前要先筛一次，也就是p是m的p，这样我们在最优性的条件下，对每一个质数，它所有对应的倍数，都被枚举到，也就保证了可行性。

    核心思想：**所有的合数可以表示为两个或多个质数的积。**

    核心：**$1\sim n$ 内的合数 $p$ 只会被其最小质因子筛掉。**（算数基本定理）

    原理：$1\sim n$ 之内的任何一个合数一定会被筛掉，而且筛的时候只用最小质因子来筛，然后每一个数都只有一个最小质因子，因此每个数都只会被筛一次，因此线性筛法是线性的。

    枚举到 $i$ 的最小质因子的时候就会停下来，即 `if(i % primes[j] == 0) break;`

    当 `i % primes[j] != 0` 时，`primes[j]` 一定小于 $i$ 的最小质因子，`primes[j]` 一定是 `primes[j]*i` 的最小质因子。
    当 `i % primes[j] == 0` 时，`primes[j]` 一定是 $i$ 的最小质因子，而 `primes[j]` 又是 `primes[j]` 的最小质因子，因此 `primes[j]` 是 `primes[j]*i` 的最小质因子。

    里面关键就是那个 $break$，如果不 $break$，就是再往大里枚举，那么以后枚举到的质数，一定不是最小质数，因为它都比当前质数大了，怎么可能最小，最小也只可能是当前的质数，从而实现了优化。

    $a$  $\times$  $prime[x]\leqslant n$

    

​											http://t.zoukankan.com/cyanigence-oi-p-11716066.html



**一个性质：任何一个合数 $n$ 必定包含一个不超过($\sqrt{n}$)的质因子。（待证）**

```cpp
int primes[N], cnt; // primes[]存储所有素数
bool st[N]; // st[x]存储x是否被筛掉

void get_primes(int n)
{
    for(int i = 2; i <= n; i ++)
    {
        if(!st[i]) primes[cnt ++] = i;
        // j < cnt 不必要，因为 primes[cnt - 1] = 当前最大质数
        // 如果 i 不是质数，肯定会在中间就 break 掉
        // 如果 i 是质数，那么 primes[cnt - 1] = i，也保证了 j < cnt
        for(int j = 0; primes[j] <= n / i; j ++)
        {
            st[primes[j] * i] = true;
            if(i % primes[j] == 0) break;
            //如果i是前面某个质数的倍数时, 说明i以后会由某个更大的数乘这个小质数筛去
            //同理, 之后的质数也是没有必要的, 因此在这个时候, 就可以跳出循环了
        }
    }
}
```

## 完全平方数

1. 一个整数 $a$ 是一个完全平方数，是指它是某一个整数的平方，即存在一个整数 $b$ ，使得 $a=b^2$
2. 一个正整数如果是完全平方数，那么它的质因数一定全部都是是偶数次。
    例如                               $36 = 2^2 * 3^2$          $ 900 = 2^2 * 3^2 * 5^2$
3. 一个非完全平方数则至少有一个是奇数次的质因数。
    例如                                                $18 = 2^1 * 3^2$ 
    若使 $18$ 变为完全平方数，就要使得奇数次变为偶数次，这里就可以乘以一个 $2$ 使得 $2^1$ 变为 $2^2$，最后得到的 $18 * 2 = 36$ 就是我们需要的完全平方数。

```c++
// 给定一个正整数 n，请找到最小的正整数 x，使得它们的乘积是一个完全平方数。
// 我们先筛掉所有的偶数次的质因数，然后剩下的就是奇数次的质因数，或者是 1 ，就是我们要的结果
#include <iostream>

using namespace std;

typedef long long LL;

int main()
{
    LL n;
	scanf("%lld", &n);
    for(LL i=2; i<=n/i; i++)
    	while(n % (i * i) == 0) n /= i * i;
    printf("%lld", n);
    
    return 0;
}
```

## 多重集合的排列数问题

排列数公式：
$$
\frac{(\alpha1+\alpha2+...+\alpha k)!}{\alpha_1!\cdot\alpha_2!\cdot...\cdot\alpha_k!}
$$

## 约数

> 算数基本定理：任何一个大于 $1$ 的自然数 $n$，如果 $n$ 不为质数，那么 $n$ 可以唯一分解成有限个质数的乘积 $n=P_1^{\alpha_1}P^{\alpha_2}_2P^{\alpha_3}_3\dots P^{\alpha_n}_n$，这里 $P_1<P_2<P_3<\dots <P_n$ 均为质数，其中指数 $\alpha_i$ 是正整数。

eg：

1. $12(1, 2, 3, 4, 6, 12)$
2. $12 = 2^2\times3^1$

### 约数的个数

> $cnt = (\alpha_1 + 1)\times(\alpha_2 + 1)\dots (\alpha_k + 1)$

$eg:$

​	$cnt = (2 + 1) \times (1 + 1) = 3 \times 2  = 6$

### 约数的和

> $sum = (P_1^0 + P_1^1 + P_1^2 +\dots + P_1^{\alpha_1})\times(P_2^0 + P_2^1 + P_2^2 +\dots + P_2^{\alpha_2})\times\dots(P_k^0 + P_k^1 + P_k^2 +\dots + P_k^{\alpha_k})$

$eg:$

​	$sum = (1 + 2^1 + 2^2) \times (1 + 3^1) = 7 \times 4 = 28$

​	其实也就是排列组合，2 可以取 0 次，1 次，2 次，3 可以取 0 次，1 次。
$$
问题:\ 给定一个数\ 1\ ≤\ sum\ ≤\ 2\times10^9,\ 找出所有约数和等于\ sum\ 的数。
$$
分析：

​	问题就是找到某个数，使得它的约数之和为 $sum$

1. 可以首先粗略的估计一下有多少个形如 $(P_1^0 + P_1^1 + P_1^2 +\dots + P_1^{\alpha_1})$ 的项
    	$(1 + 2)\times(1 + 3)\times(1 + 5) \times(1 + 7)\times(1 + 11)\times(1 + 13)\times(1 + 17)\times(1 + 19)\times(1+21)\times(1+23)$
       	$= 3\times4\times6\times8\times12\times14\times18\times20\times22\times24$
       	$= 18\times10^9$
       	$>\ 2\ \times10^9$
    所以大概不会超过 10 项，那么这道题可以用 dfs 来爆搜每一个 $P_i$ 和 $\alpha_i$，递归深度不超过 10 层。但是需要剪枝，不然每一层都从 2 开始枚举，时间复杂度仍然是很高的。

2. $sum$ 一般情况下只有两种情况：

    1. $sum = (1 + P_1)(1 + P_2 +\dots)\dots$

        如果$(P_1 > =\sqrt {sum})$ ， 那么一定有 $(1 + P_1)(1 + P_2) > (1 + P_1)^2 > P_1^2>=sum$
        所以 $P_1 <= \sqrt{sum}$

    2. $sum = (1 + P_1 + P_1^2 + \dots)(1 + \dots) > P_1^2$
        如果 $P_1 > =\sqrt {sum}$ ，那么一定有 $1 + P_1 + P_1^2 > P_1^2 >= sum$
        所以  $P_1 <= \sqrt{sum}$

    >特判：**如果有 $P_1 > =\sqrt {sum}$，那么一定有 $sum = 1 + P_1$**
    >
    >若存在 $P_i >= \sqrt {sum},\ P_j>= \sqrt {sum}$，且 $P_i < P_j$，
    >
    >那么根据上面的结论一定有 $sum = 1 + P_i,\ sum = 1 + P_j$，得到$P_i = P_j$，与条件相悖
    >
    >所以如果存在一个 $P_1 ≥ \sqrt{sum} \ 且满足\ s = 1 + P_1$，那么有且仅有 $P1$ 这一个。
    >
    >当 $\alpha_1 = 1$ 时候，且 $sum = 1 + P_1$ ，那么只需要判断 $sum - 1$ 是不是质数即可。
    >比如 $s = 12$，$s - 1 = 11$，如果 $s - 1$ 是质数，那么只有 $1$  和本身，相加一定等于 $s$ ，反过来一样的，如果 $s - 1$ 是质数，那么只有 $1$ 和 $s - 1$ 两个约数，相加后一定为 $s$ 。

    其实对于每一层的 $sum$，我们都是搜索 $P_1$，然后用 $sum$ 来除以该项，得到：
    $$
    \frac {sum}{1 + P_1^1 +\dots+P_1^{\alpha_1}}
    $$
    整个过程就是能不能找到符合条件的 $(1 + P_1 + P_1^2 + \dots + P_1^{\alpha_1})$ 能够使得
    $$
    sum \%(1 + P_1 + P_1^2 + \dots + P_1^{\alpha_1}) == 0
    $$

    有的话，我们就 $sum /= (1 + P_1 + P_1^2 + \dots + P_k^{\alpha_1})$ 再 **dfs** 到下一层。 

    ```c++
    for(primes: 2,3,5,7,...)
        for(α: 1,2,3,...)
            if(sum mod (1+p1+p1^2+...+p1^α1) == 0)
                dfs(下一层)
    ```

3. `dfs(int last, int prod, int s)`的三个参数

    1. `last`
        表示上一个枚举的质数，避免重复，例如，枚举 2 之后再 dfs 到下一层，就应该从 3 开始，而不是从头开始枚举。
    2. `prod`
        表示 $sum = (P_1^0 + P_1^1 +\dots + P_1^{\alpha_1})\times(P_2^0 + P_2^1 +\dots + P_2^{\alpha_2})\times\dots(P_k^0 + P_k^1+\dots + P_k^{\alpha_k})$ 当前进行到哪一个括号里面的最高次项 $P_i^{\alpha_i}$ 的乘积和，例如 $sum = (1 + 2 + 2^2)\times(1 + 3 + 3^3)(1 + \dots)$，那么 $dfs$ 到第三层的时候，$prod = 2^2 \times 3^3$
        由算术基本定理可知，一个数 $N = P_1^{\alpha_1}\times P_2^{\alpha_2}\times\dots\times P_k^{\alpha_k}$，
        我们求得的 $prod$ 存放的就是这样的乘积，这个乘积也就是答案。
        eg:
        我们要判断一个数 $N$ 的约数之和是否是我们需要的.
        由  $N = P_1^{\alpha_1}\times P_2^{\alpha_2}\times\dots\times P_k^{\alpha_k}$
        可以得到：$12 = 2^2\times 3^1$
        由  $sum = (P_1^0 + P_1^1 +\dots + P_1^{\alpha_1})\times(P_2^0 + P_2^1 +\dots + P_2^{\alpha_2})\times\dots(P_k^0 + P_k^1+\dots + P_k^{\alpha_k})$
        可以得到：$sum = (1 + 2 + 2^2)\times(1 + 3)$
        所以可以根据 $sum$ 中每一项的最高次项的乘积得到答案 N 
    3. `s`
        当 $s == 1$ 的时候，表示已经搜完了最后一个项，保存答案后返回。
        特判 $P_i >= \sqrt s $ 的情况，如果 $s - 1 = P_i$ 那么保存答案
        剩下的就是 $P_i < \sqrt s $ 的一般情况，每次找到可以整除的项就递归到下一层，此时 $s$ 更新为整除后的值

### Code

```c++
#include <iostream>
#include <algorithm>

using namespace std;

const int N = 50000; // N = sqrt(2e9)
int primes[N], cnt;
bool st[N];
int ans[N], len; // 保存答案和答案个数

void get_primes(int n) // 线性筛质数
{
    for(int i=2; i<=n; i++)
    {
        if(!st[i]) primes[cnt++] = i;
        for(int j=0; i*primes[j] <= n; j++)
        {
            st[i * primes[j]] = true;
            if(i % primes[j] == 0) break;
        }
    }
}

bool is_prime(int n) // 判断是否是质数
{
    if(n < N) return !st[n]; // 如果没有没筛掉，说明是质数
    for(int i=0; primes[i]<=n/primes[i]; i++)
    {
        if(n % primes[i] == 0) return false;
    }
    return true;
}

// last 表示当前要从哪个质数的下标开始枚举，prod 表示要找的答案的部分质数乘积，s 表示当前要分解约数和
void dfs(int last, int prod, int s)
{
    if(s == 1) // 如果分解到最后只剩下一个 1，那么分解结束，返回
    {
        ans[len++] = prod;
        return;
    }

    // 首先特判一下 P1 >= sqrt(s), s - 1 = P1 的情况,等价于判断 s - 1 是不是质数，如果是的话，那么 s - 1 就是一种答案
    if(s - 1 > (last < 0 ? 1 : primes[last]) && is_prime(s - 1)) // 不仅要是质数，还要是大于上一层质数的质数 
        ans[len++] = prod * (s - 1);

    for(int i=last+1; primes[i]<=s/primes[i]; i++) // 从下一个质数开始枚举
    {
        int p = primes[i]; 
        for(int j=1+p,t=p; j<=s; t*=p,j+=t) //  // j == 1 + Pi^1 + Pi^2 + ... + Pi^αi
        {
            if(s % j == 0) dfs(i, prod * t, s / j); // 当 j 是 s 的某一项的时候，递归到下一层
        }
    }
}

int main()
{
    get_primes(N - 1);

    int n;
    while(cin >> n)
    {
        len = 0;
        dfs(-1, 1, n);

        // 搜索完之后，把答案排序
        cout << len << endl;
        if(len)
        {
            sort(ans, ans + len);
            for(int i=0; i<len; i++) cout << ans[i] << ' ';
            puts("");
        }
    }

    return 0;
}
```
