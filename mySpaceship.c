#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#ifndef STRUCT_INTEGER_ARRAY
#define STRUCT_INTEGER_ARRAY
typedef struct output
{
    int* x;
    int* y;
    char* dir;
} output_direction;
#endif

char* my_spaceship(char* course)
{
  //allocate memory for the struct
  output_direction *course_struct = (output_direction*)malloc(sizeof(output_direction)); 
  
  //allocate memory for the struct elements
  course_struct->x = (int *)malloc(sizeof(int));
  course_struct->y = (int *)malloc(sizeof(int));
  course_struct->dir = (char *)malloc(sizeof(char));

  //dereference the struct variables 
  int x = *course_struct->x;
  int y = *course_struct->y;
  char* dir = course_struct->dir;

  //initialize variables
  x = 0;
  y = 0;
  dir = "up";
  
  //allocate memory for the input string and initialize
  int n = strlen(course);
  char* c = (char*)malloc(n * sizeof(char));
  c = course;

  for (int i = 0; i < n; i++){
      if (c[i] == 'A') {
          switch (dir[0]){
              case 'l': x = x - 1; break;
              case 'r': x = x + 1; break;
              case 'u': y = y - 1; break;
              case 'd': y = y + 1; break;
              default: break;
          }
      }
      if (c[i] == 'L') {
      switch (dir[0]){
          case 'l': dir = "down"; break;
          case 'r': dir = "up"; break;
          case 'u': dir = "left"; break;
          case 'd': dir = "right"; break;
          default: break;
          }
      }
      if (c[i] == 'R') {
          switch (dir[0]){
              case 'l': dir = "up"; break;
              case 'r': dir = "down"; break;
              case 'u': dir = "right"; break;
              case 'd': dir = "left"; break;
              default: break;
          }
      }
  }
  //allocate memory for the output string and then populate
  char* S= (char*)malloc(50 * sizeof(char));
  sprintf(S, "{x: %d, y: %d, direction: '%s'}", x, y, dir);
  return S;
}
  
int main()
{
  char* directions = "AAAA";
  printf("%s\n", my_spaceship(directions));
  return 0;
}
