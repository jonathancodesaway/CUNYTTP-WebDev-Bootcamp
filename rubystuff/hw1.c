#include <stdio.h>

int myPNS(int l[], int m, int n) {
  m = 9;
  int i = 1, j = 3, k; l[0] = 2;
  while (j <= n && i < m) {
    k = 0;
    while (k < i)
      if (j%l[k])
        ++k;
      else
        break;
    if (k==i)
      l[i++] = j;
    ++j;
  }
  if (i < m)
    l[i] = -1;
  if (n < 2)
    return 1;
  else
    return 0;
}

int main(){

  int arr [12] = {1,2,3,4,5,6,7,8,9,10,11,12};
  
  if (myPNS(arr, 9, 10)){
    printf("%s\n", "hello" );
  } else{
    printf("%s\n", "bye" );
  }

}
