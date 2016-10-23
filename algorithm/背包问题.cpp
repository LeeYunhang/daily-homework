#include "iostream"

using namespace std;

int c[4][5] = {0};
int W[4] = {2, 1, 3, 2};
int V[4] = {12, 10, 20, 15};

// 算法思路
// f(i, j) = {
//   f(i-1, j) or
//   max(f(i-1, j), f(i-1, j-W[i]) + V[i])  j - W[i] >= 0 or
//   0    i == 0 or j == 0
// }

// 递归版本(设置了备忘录)
int knapsack(int m, int n) {
    if (!~m || !~n) { return 0; }
    else if (c[n][m]) { return c[n][m]; }

    int a = knapsack(m, n-1), b = -1;
    if (m - W[n] >= 0) {
        b = knapsack(m - W[n], n-1) + V[n];
    }

    return c[n][m] = a > b? a:b;
}

// 迭代版本
int main () {

  for (int i = 0; i < 4; ++i) {
    for (int j = 0; j < 5; ++j) {
      if (i == 0 || j == 0) {
        c[i][j] = 0;
      } else {
        c[i][j] = c[i-1][j];
        if (j >= W[i]) {
          int tmp = c[i-1][j-W[i]] + V[i];
          if (tmp > c[i][j]) {
            c[i][j] = tmp;
          }
        }
      }
    }
  }

  cout << c[3][4] << endl;
  // cout << knapsack(4, 3);

  return 0;
}
