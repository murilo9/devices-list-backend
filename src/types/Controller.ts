/**
 * A function that handles a request.
 * All controller's dependencies, as well as validator and authenticators must
 * be passed on the contructor.
 * The handler method receives only a request object which is passed on by the makeRoute function.
 */
export default abstract class Controller {
  public abstract handle(...args: any[]): Promise<any>;
}
