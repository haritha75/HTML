#include<stdio.h>
#include<stdlib.h>
int main() {
    int *ptr = (int*)malloc(4*sizeof(int)); // 4 * 4 = 16bytes of memory allocated

    // printf("%p",ptr); // returns the base address
    // printf("\n%p",(ptr+1));
    // printf("\n%p",(ptr+2));
    // printf("\n%p",(ptr+3));
    // printf("\n%p",(ptr+4));
    // printf("\n%p",(ptr+5));
    *ptr = 10;
    *(ptr+1)=20;
    *(ptr+2)=20;
    *(ptr+3)=20;
    *(ptr+4)=20;
    *(ptr+5)=20;
    printf("%d",*ptr); // returns the base address
    printf("\n%d",*(ptr+1));
    printf("\n%d",*(ptr+2));
    printf("\n%d",*(ptr+3));
    printf("\n%d",*(ptr+4));
    printf("\n%d",*(ptr+5));

    int *ptr = (int*) malloc(5*sizeof(int));
     printf("%d",*ptr); // returns the base address
    printf("\n%d",*(ptr+1));
    printf("\n%d",*(ptr+2));
    printf("\n%d",*(ptr+3));
    printf("\n%d",*(ptr+4));
    printf("\n%d",*(ptr+5));

}

