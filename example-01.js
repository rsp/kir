const f = a => a(a);

funciton g(b) {
  return f(b(f));
}

