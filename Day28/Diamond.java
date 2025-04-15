//print the pattern.
 /*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/
public class Diamond
{
public static void main(String args[])
{
int n=5;
for(int i=1;i<=n;i++)
{
for(int j=4;j>=i;j--)
System.out.print(" ");
for(int k=1;k<=(2*i)-1;k++);
System.out.print("*");
System.out.println();
}
for(int i=n-1;i<=1;i--)
{
for(int j=1;j<=i;j++)
System.out.print(" ");
for(int k=1;k<=i*2-1;k++)
System.out.print("*");
System.out.println();
}
}
}